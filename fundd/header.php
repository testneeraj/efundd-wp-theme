<!doctype html>
<html <?php language_attributes(); ?> class="no-js">
<head>
    <meta charset="<?php bloginfo('charset'); ?>"/>
    <link rel="icon" type="image/svg+xml"
          href="<?php echo get_template_directory_uri(); ?>/assets/img/favicon/favicon.svg"/>
    <link rel="apple-touch-icon" sizes="180x180"
          href="<?php echo get_template_directory_uri(); ?>/assets/img/favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32"
          href="<?php echo get_template_directory_uri(); ?>/assets/img/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16"
          href="<?php echo get_template_directory_uri(); ?>/assets/img/favicon/favicon-16x16.png">
    <link rel="mask-icon" href="<?php echo get_template_directory_uri(); ?>/assets/img/favicon/safari-pinned-tab.svg"
          color="#5bbad5">


    <title><?php wp_title(''); ?><?php if (wp_title('', false)) {
            echo ' :';
        } ?><?php bloginfo('name'); ?></title>

    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="<?php bloginfo('description'); ?>">

    <?php wp_head(); ?>
    <?php if (is_user_logged_in()): ?>
        <style>
            .fixed-top {
                top: 32px;
            }
        </style>
    <?php endif; ?>
    <?php
    $logo = get_field("logo", "options");
    $button_text = get_field("button_text", "options");
    $button_link = get_field("button_link", "options");
    ?>
</head>
<body>
<header class="header bg-primary">
    <nav class="navbar fixed-top navbar-expand-xl bg-primary" data-bs-theme="dark">
        <div class="container-xxl">
            <div class="d-flex align-items-center">
                <a href="<?php echo home_url() ?>" class="navbar-brand">
                    <?php if (!empty($logo)): ?>
                        <img src="<?php echo $logo["url"] ?>"
                             alt="<?php echo @$logo["alt"] ?>">
                    <?php else: ?>
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/img/logo/logo-white.svg"
                             alt="Logo">
                    <?php endif; ?>
                </a>

                <div class="sliding-tabs">
                    <div class="tabs">
                        <input type="radio" id="corporate-tab" name="tabs"/>
                        <label class="tab" for="corporate-tab">Corporate</label>

                        <input type="radio" id="business-tab" name="tabs" checked/>
                        <label class="tab" for="business-tab">Business</label>

                        <input type="radio" id="personal-tab" name="tabs"/>
                        <label class="tab" for="personal-tab">Personal</label>
                        <span class="glider"></span>
                    </div>
                </div>
            </div>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#headerNav"
                    aria-controls="headerNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="headerNav">
                <ul class="navbar-nav ms-auto">
                    <?php
                    $main_menu = render_menu('main');
                    if (isset($main_menu)):
                        foreach ($main_menu as $menu_item) :
                            if (!empty($menu_item['children']) && isset($menu_item['title'])) :
                                $menu_childrens = $menu_item["children"];
                                ?>
                                <li class="nav-item dropdown">
                                    <a href="<?php echo $menu_item["url"] ?>" title="<?php echo $menu_item["title"] ?>" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown"
                                       aria-expanded="false">
                                        <?php echo $menu_item["title"] ?>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <?php foreach ($menu_childrens as $menu_item) : ?>
                                        <li><a href="<?php echo $menu_item["url"] ?>" title="<?php echo $menu_item["title"] ?>" class="dropdown-item"><?php echo $menu_item["title"] ?></a>
                                        </li>
                                        <?php endforeach; ?>
                                    </ul>
                                </li>
                            <?php else: ?>
                                <li class="nav-item">
                                    <a href="<?php echo $menu_item['url']; ?>" title="<?php echo $menu_item['title']; ?>" class="nav-link"><?php echo $menu_item['title']; ?></a>
                                </li>
                            <?php endif;
                        endforeach;
                    endif; ?>
                    <li class="nav-item lang-selector--wrapper">
                        <div class="flag-img">
                            <img src="<?php echo get_template_directory_uri(); ?>/assets/img/flag/uk.svg" alt="Flag">
                        </div>
                        <div>
                            <select id="langSelector" class="lang-selector">
                                <option selected="selected" value="#">EN</option>
                                <option value="#/fr/">FR</option>
                            </select>
                        </div>
                    </li>
                    <?php if (!empty($button_text)): ?>
                        <li class="nav-item">
                            <a href="<?php echo $button_link ?>" title="<?php echo $button_text ?>"
                               class="btn btn-light-green"><?php echo $button_text ?></a>
                        </li>
                    <?php endif; ?>
                </ul>
            </div>
        </div>
    </nav>
</header>
<main>