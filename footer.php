<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after
 *
 * @package understrap
 */

?>

<footer id="footer">
		<div class="container text-center">
			<div class="row">
					<div class="col-sm-12">
						<a href="<?php echo get_home_url(); ?>" id="" class="footer__logo">
							<img class="footer__logo" src="<?php bloginfo('template_directory'); ?>/img/logo.svg" alt="Logo">
						</a>
					</div>
			</div>
		</div>
</footer>


		

<a class="back-to-top  inner-link " href="#header">
	<i class="far fa-arrow-up"></i>
</a>


<?php wp_footer(); ?>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/header.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/flickity.min.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/fontawesome-all.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/parallax.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/typed.min.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/smooth-scroll.min.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/ytplayer.min.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/aos.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/scripts.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/easings.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/parallax_perspective.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/menuoverlay.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/onload.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/TweenMax.min.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/TimelineMax.min.js"></script>

<script>
	AOS.init();
</script>

</body>

</html>
