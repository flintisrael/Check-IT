<?php
//include('login/login.php'); // Includes Login Script

include ($_SERVER['DOCUMENT_ROOT']."/checkit/login/login.php");

if(isset($_SESSION['login_user'])){
    header("location: profile.php");
   // echo getcwd() . "\n";
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Login Form in PHP with Session</title>

    <!--
    <link href="http://netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min.css" rel="stylesheet">
    -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet" type="text/css">

    <script src="http://code.jquery.com/jquery-1.11.1.min.js"></script>
    <script src="http://netdna.bootstrapcdn.com/bootstrap/3.0.3/js/bootstrap.min.js"></script>
</head>
<body>

<script src="http://mymaplist.com/js/vendor/TweenLite.min.js"></script>
<div id="main">


        <div class="container">
            <div class="row vertical-offset-100">
                <div class="col-md-4 col-md-offset-4">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h3 class="panel-title">Please sign in</h3>
                        </div>
                        <div class="panel-body">
                            <form action="" method="post">
                                <fieldset>
                                    <div class="form-group">
                                        <input class="form-control" placeholder="user name" name="username" type="text">
                                    </div>
                                    <div class="form-group">
                                        <input class="form-control" placeholder="Password" name="password" type="password" value="">
                                    </div>
                                    <div class="checkbox">
                                        <label>
                                            <input name="remember" type="checkbox" value="Remember Me"> Remember Me
                                        </label>
                                        <a href="login/test.php" class="pull-right need-help">Create an account  </a><span class="clearfix"></span>
                                    </div>
                                    <input class="btn btn-lg btn-success btn-block" name="submit" type="submit" value=" Login ">
                                    <span><?php echo $error; ?></span>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>


</div>

<script type="text/javascript">
    $(document).ready(function(){
        $(document).mousemove(function(e){
            TweenLite.to($('body'),
                .5,
                { css:
                {
                    backgroundPosition: ""+ parseInt(event.pageX/8) + "px "+parseInt(event.pageY/'12')+"px, "+parseInt(event.pageX/'15')+"px "+parseInt(event.pageY/'15')+"px, "+parseInt(event.pageX/'30')+"px "+parseInt(event.pageY/'30')+"px"
                }
                });
        });
    });
</script>
</body>
</html>