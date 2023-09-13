<!DOCTYPE html>
<html lang="RU">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
    <title>Poster</title>
</head>
<body class="page">
    <main class="main">
        <h1 class="title">Poster</h1>
        <section class="poster">
            <img src="" alt="" class="poster__img-main">
            <div class="poster-slider">
                <div class="slider">
                    <div class="poster__link-upload">
                        <img src="<?php echo get_stylesheet_directory_uri(); ?>/images/default-poster.png" alt="" class="poster__background" id="poster-upload">
                    </div>
                    <div class="poster__link-upload">
                        <img src="<?php echo get_stylesheet_directory_uri(); ?>/images/default-poster.png" alt="" class="poster__img">
                        <img src="<?php echo get_stylesheet_directory_uri(); ?>/images/interior.jpeg" alt="" class="poster__background" id="poster__background">
                    </div>
                </div>
                <button class="slider__left-button">&lt;</button>
                <button class="slider__right-button">&gt</button>
            </div>
            <div class="poster-block">

                <div class="poster-block__upload-file">
                    <input class="poster-block__upload" id="poster-block__upload" type="file" accept="image/*">
                    <label class="poster-block__button" for="poster-block__upload">
                        <span class="poster__span">Загрузить картинку</span>
                    </label>
                </div>
                <div class="poster-block__group">
                    <div class="poster-block__input-group">
                        <label for="width" class="poster-block__label">Ширина, см</label>
                        <input type="number" id="width" class="poster-block__input" value="30" min="20" max="120" onkeyup="if(value>120) value=120;">
                    </div>
                    <div class="poster-block__input-group">
                        <label for="height" class="poster-block__label">Высота, см</label>
                        <input type="number" id="height" class="poster-block__input" value="40" min="15" max="80" onkeyup="if(value>80) value=80;">
                    </div>
                </div>
                <div class="poster-block__input-group">
                    <label for="border" class="poster-block__label">Добавить рамку</label>
                    <input type="checkbox" id="border" class="poster-block__input-checkbox">
                </div>
                <form class="poster-block__form">
                    <label class="poster-block__label-padding" for="padding">Выберите отступ</label>
                    <select class="poster-block__select-padding" id="padding">
                      <option class="poster-block__option" value="0">Без отступа</option>
                      <option class="poster-block__option" value="10">10%</option>
                      <option class="poster-block__option" value="15">15%</option>
                      <option class="poster-block__option" value="20">20%</option>
                    </select>
                  </form>
                  
            </div>
        </section>
    </main>
    <?php wp_footer(); ?>
</body>
</html>