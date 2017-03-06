<!doctype html>

<input type="text">
<script>
  var field = document.querySelector("input");
  field.addEventListener("keypress", function(event){
    if (event.charCode == 81 || event.charCode == 87
        || event.charCode == 88 || event.charCode == 113
        || event.charCode == 119 || event.charCode == 120)
      event.preventDefault();
  });

</script>
