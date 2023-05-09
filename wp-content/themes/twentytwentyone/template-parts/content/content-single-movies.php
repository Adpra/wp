<?php
$year  = get_post_meta(get_the_ID(), 'yourprefix_year', true);
$duration = get_post_meta(get_the_ID(), 'yourprefix_duration', true);
$genre   = get_post_meta(get_the_ID(), 'yourprefix_genre', true);
?>

<div style="display:flex; justify-content:center;">
  <div class="card" style=" background:white; padding:20px;">
    <img class="card-img-top" src="<?php echo get_the_post_thumbnail_url() ?>" alt="Card image cap">
    <div class="card-body" style="padding: 5px; text-align:center">
      <h5 class="card-title"><?php echo get_the_title() ?></h5>
      <p><?php echo $year ?></p>
      <p><?php echo $duration ?></p>
      <p><?php echo $genre ?></p>
    </div>
  </div>
</div>