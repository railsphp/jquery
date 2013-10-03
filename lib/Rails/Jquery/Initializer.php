<?php
namespace Rails\Jquery;

class Initializer
{
    public function initialize()
    {
        \Rails::assets()->addPaths([
            realpath(__DIR__ . '/../../../vendor/assets/javascripts')
        ]);
        \Rails::assets()->addFilePatterns(['.map']);
    }
}
