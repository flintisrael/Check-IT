<?php
/**
 * Created by PhpStorm.
 * User: israelf
 * Date: 15/12/2015
 * Time: 09:20
 */

    function func1($table ,$arrfieldes, $arrvalues)
    {
        if(count($arrfieldes) == 0){
            return;
        }
        else if(count($arrfieldes) != count($arrvalues)){
            return;
        }
        else{
            $fields = '';
            $values = '';
            $query = '';
            for($i = 0, $c = count($arrfieldes); $i < $c; $i++){
                if($i + 1 < $c){


                }
            }
            return;
        }
    }
?>