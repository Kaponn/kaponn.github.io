<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");
require_once './php/controllers/BeerController.php';
require_once './php/controllers/UserController.php';
require_once './php/Database.php';

class Router
{
  public static $routes;

  public static function get($url, $view)
  {
    self::$routes[$url] = $view;
  }

  public static function post($url, $view)
  {
    self::$routes[$url] = $view;
  }

  public static function run($url)
  {
    $urlParts = explode("/", $url);
    $action = $urlParts[0];
    if (!array_key_exists($action, self::$routes)) {
      die("Wrong url!");
    }

    $connection = (new Database())->connect();
    $repository = (new BeerRepository($connection));
    $controller = self::$routes[$action];
    $object = new $controller($repository, $connection);
    $action = $action ?: 'index';

    $id = $urlParts[1] ?? '';

    $object->$action($id);
  }
}
