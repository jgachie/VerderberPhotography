<?php
    echo "Hello";
?>

<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <title>Verderber Photography | Contact</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="main.css">
        <link rel="shortcut icon" href="Resources/Misc/favicon.ico" type="image/x-icon">
        <script src="functions.js"></script>
        <script src="http://code.jquery.com/jquery-2.1.0.js"></script>
    </head>
    <body>
        <header>
            <div id="title_img_block">
                <img id="title_img" src="Resources/Misc/MichyPic_Cropped.jpg" alt="MichyPic_Cropped.jpg">
            </div>
            <div id="title_block">
                <img id="title_icon" src="Resources/Misc/Camera_Icon.png" alt="camera_icon">
                <h1 id="title">Verderber Photography</h1>
            </div>
            <nav id="navbar">
                <ul>
                    <li><a href="index.html">Homepage</a></li>
                    <li><a href="packages.html">Packages</a></li>
                    <li><a href="gallery.html">Gallery</a></li>
                    <li><a href="contact.php">Contact</a></li>
                    <li><a href="about.html">About</a></li>
                </ul>
            </nav>
        </header>
        <main>
            <h1 class="page_header">Contact</h1>
            <form id="contact" name="contact_form" action="#" method="post">
                <label id="name_label" class="contact_label" for="contact_name">NAME</label>
                <label id="email_label" class="contact_label" for="contact_email">EMAIL</label>
                <div>
                    <input id="contact_name" class="contact_form" type="text" name="cust_name" required>
                    <input id="contact_email" class="contact_form" type="email" name="cust_email" required>
                </div>
                <br>
                <br>
                <label id="subject_label" class="contact_label" for="contact_subject">SUBJECT</label>
                <label id="phone_label" class="contact_label" for="contact_phone">PHONE NUMBER (OPTIONAL)</label>
                <div>
                    <input id="contact_subject" class="contact_form" type="text" name="cust_subject" required>
                    <input id="contact_phone" class="contact_form" type="tel" name="cust_phone">
                </div>
                <br>
                <br>
                <label id="message_label" class="contact_label" for="contact_message">MESSAGE</label>
                <textarea id="contact_message" class="contact_form" name="cust_message" placeholder="Please enter your message here..." rows="10" required></textarea>
                <input id="contact_submit" type="submit">
            </form>
            <aside id="contact_info">
                <p>Please don't hesitate to contact me if you have any questions. I'm always taking
                    new clients, so if you'd like to capture your precious memories in high-quality photographs
                    at an affordable price, please send me an email (or just fill out the form to the left)!</p>
                <br>
                <p>EMAIL</p>
                <p>michelleverder@notarealsite.dumb</p>
                <br>
                <p>PHONE</p>
                <p>123-456-7890</p>
                <br>
                <p>MAILING ADDRESS</p>
                <p>Verderber Photography Ltd.<br>
                    476 Street Ln.,<br>
                    Cityburgh, NC, 28323</p>
            </aside>
        </main>
        <aside id="sidebar">
            <h2 id="sidebar_header">News</h2>
        </aside>
        <footer>
            Copyright &copy; 2017 Verderber Photography
        </footer>
    </body>
</html>