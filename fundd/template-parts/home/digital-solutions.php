<?php
$digital_solution_section = get_field("digital_solution_section");
if(isset($digital_solution_section)):
?>
<section class="digital-solution">
    <div class="container">
        <div class="row">
            <div class="col-xl-5">
                <h2 class="section-title"><?php echo $digital_solution_section["title"] ?></h2>
                <p><?php echo $digital_solution_section["text"] ?></p>
            </div>
        </div>
    </div>
</section>
<?php endif; ?>