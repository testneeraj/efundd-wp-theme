<?php get_header(); ?>
    <!-- Start: Digital Solution -->
    <?php include "template-parts/home/digital-solutions.php"; ?>
    <!-- End: Digital Solution -->

    <!-- Start: Transaction Overview -->
    <?php include "template-parts/home/transaction-overview.php"; ?>
    <!-- End: Transaction Overview -->

    <!-- Start: CTA -->
    <section class="cta">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xxl-10">
                    <div class="cta--content-wrapper">
                        <div class="cta--content">
                            <div class="row">
                                <div class="col-lg-7 col-xl-6">
                                    <h3 class="section-title">Everything you need to Send and Receive Payments Globally.</h3>

                                    <div class="btn-grp">
                                        <a href="#" title="Open an account" class="btn btn-light-green">Open an account</a>
                                        <a href="#" title="Process payments" class="btn btn-light-green">Process payments</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="cta--img">
                            <img src="<?php echo get_template_directory_uri(); ?>/assets/img/other/cta.png" alt="CTA Image">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- End: CTA -->
<?php get_footer(); ?>