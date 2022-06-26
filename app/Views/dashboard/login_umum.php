<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="<?= base_url("/assets/dist/img/LogoPKL.png") ?>" type="image/x-icon">

    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Poppins:300,400,500,700"
        rel="stylesheet">

    <!-- Vendor CSS Files -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
        integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
        crossorigin="anonymous" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
        integrity="sha512-tS3S5qG0BlhnQROyJXvNjeEM4UpMXHrQfTGmbQ1gKmelCxlSEBUaxhRBj/EFTzpbP4RVSrpEikbmdJobCvhE3g=="
        crossorigin="anonymous" />

    <link rel="stylesheet" href="<?= base_url("/css/dashboard/login/login.css") ?>">
    <title>Login Dashboard</title>
    <style>
        .checkbox-round {
            width: 1em;
            height: 1em;
            background-color: white;
            border-radius: 50%;
            vertical-align: middle;
            appearance: none;
            -webkit-appearance: none;
            outline: none;
            cursor: pointer;
        }

        .checkbox-round:hover {
            background-color: #2E9E89;
        }

        .checkbox-round:checked {
            background-color: #0A5446;
        }

        .inputBox {
            position: relative;
            width: 400px;
            height: 60px;
        }

        /* .inputBox input {} */

        input.form-control::placeholder{
            color: #2E9E89;
        }

        #toggle {
            position: absolute;
            top: 50%;
            right: 20px;
            transform: translateY(65%) translateX(0%);
            width: 20px;
            height: 20px;
            background: url(/img/dashboard/login/show.png);
            background-size: cover;
            cursor: pointer;
        }

        #toggle.hide {
            background: url(/img/dashboard/login/hide.png);
            background-size: cover;
        }

    </style>
</head>

<body>

    <!-- NAVBAR -->
    <nav class="navbar navbar-expand-lg sticky-top bg-white">
        <div class="container-fluid mx-sm-5 justify-content-end">
            <!-- <div class="navbar-brand text-white" href="#">
                <a class="text-decoration-none text-white" href="<?= base_url('/') ?>"><img src="/assets/dist/img/LogoPKL.png" alt="Logo PKL" height="45">
                    <span class="text-decoration-none text-white ms-2 fw-bold">PKL 61</span>
                </a>
            </div> -->
            <button class="navbar-toggler d-lg-none custom-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon">
                    <i class="fas fa-bars text-green" style="font-size:28px;"></i>
                </span>
            </button>

            <div class="collapse navbar-collapse justify-content-end align-items-center" id="navbarSupportedContent">
                <!-- <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success text-white" type="submit">Search</button>
                </form> -->
                <div class="d-lg-flex d-none flex-row">
                    <a href="#" class="nav-link px-4 text-green" style="font-size: 18px;">
                        Media Sosial PKL
                    </a>
                    <a href="/" class="nav-link px-4 text-green" style="font-size: 18px;">
                        PKL 61
                    </a>
                    <a href="#" class="nav-link px-4 text-green" style="font-size: 18px;">
                        <i class="fas fa-home"></i>
                    </a>
                </div>

                <!-- Responsive Mobile -->
                <ul id="mobile" class="navbar-nav d-lg-none d-flex flex-row justify-content-end mt-2">
                    <li class="nav-item px-2">
                        <a class="nav-link text-green" href="#">Media sosial PKL</a>
                    </li>
                    <li class="nav-item px-2">
                        <a class="nav-link text-green" href="#">PKL 61</a>
                    </li>
                    <li class="nav-item px-2">
                        <a class="nav-link text-green" href="#"><i class="fas fa-home"></i></a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <div class="container-fluid">
        <div id="loginPanel" class="row">
            <div class="col d-flex flex-column justify-content-center align-items-center px-5" data-aos="fade-left"
                data-aos-duration="1000">
                <img src="/assets/dist/img/LogoPKL.png" alt="Logo PKL 61" width="100">
                <h4 class="fw-bold text-green mt-3" style="letter-spacing: 3px">Selamat Datang Kembali!</h4>
                <label for="nama" class="form-label mb-2" style="letter-spacing: 2px">Silahkan masuk menggunakan
                    Email</label>
                <form action="">
                    <div class="mb-2">
                        <label for="nama" class="form-label"
                            style="letter-spacing: 1px; color: #444B59; font-weight: 500;">Email</label>
                        <input type="text" class="form-control py-2 border-1"
                            style="border-radius: 25px; border-color: #0A5446; color: #2E9E89; font-size: 16px"
                            id="nama" value="" placeholder="Masukkan Email">
                    </div>
                    <div class="mb-3 inputBox">
                        <label for="nama" class="form-label"
                            style="letter-spacing: 1px; color: #444B59; font-weight: 500;">Password</label>
                        <input type="password" class="form-control py-2 border-1"
                            style="border-radius: 25px; border-color: #0A5446; color: #2E9E89; font-size: 16px"
                            id="password" value="" placeholder="Masukkan Password">
                        <div id="toggle" onclick="showHide();" class="d-flex justify-content-end"></div>
                    </div>
                    <div class="row pt-2">
                        <div class="col d-inline-flex">
                            <div class="border border-dark me-1"
                                style="border-radius: 100%; width: 1.5em; height: 1.5em">
                                <input class="checkbox-round" style="margin-left: 0.2em; margin-bottom: 0.2em"
                                    type="checkbox" name="exampleRadios" id="exampleRadios2">
                            </div>
                            <label for="exampleRadios2" class="ms-2">
                                Remember me
                            </label>
                        </div>
                        <div class="col d-flex justify-content-end">
                            <a href="#" class="nav-link p-0 bg-white">
                                <p class="" onmouseover="this.style.color='#2E9E89';"
                                    onmouseout="this.style.color='#0A5446';" style="color: #0A5446; cursor: pointer">
                                    Forget password?</p>
                            </a>
                        </div>
                    </div>
                    <div>
                        <button class="btn btn-primary py-1" type="submit"
                            style="width: 100%; border-radius: 25px; background-color: #0A5446">Sign In</button>
                    </div>
                    <a href="/register" class="nav-link p-0 bg-white w-100 mt-3">
                        <div class="text-center p-1" onmouseover="this.style.color='#2E9E89';"
                            onmouseout="this.style.color='#0A5446';" style="color: #0A5446; cursor: pointer; width: 100%; border-radius: 25px; background-color: rgb(164, 210, 159)">
                            <span style="font-weight: bold;">Register</span>
                        </div>
                    </a>
                </form>
            </div>
            <div class="col d-md-flex d-none justify-content-start align-items-center text-center" data-aos="zoom-out"
                data-aos-duration="1000">
                <img src="/img/dashboard/login/bidang ti a.png" alt="Deo TI" width="400" class="">
            </div>
        </div>
    </div>

    <!-- Script Js -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous">
    </script>
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

    <script>
        AOS.init();
    </script>
    <script type="text/javascript">
        const password = document.getElementById('password');
        const toggle = document.getElementById('toggle');

        function showHide() {
            if (password.type === 'password') {
                password.setAttribute('type', 'text');
                toggle.classList.add('hide')
            } else {
                password.setAttribute('type', 'password');
                toggle.classList.remove('hide')
            }
        }
    </script>
</body>

</html>