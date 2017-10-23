$(document).ready(function(){
  var chosenBranch;

  $('#branches').change(function(){
    chosenBranch = $(this).val();

    if (chosenBranch == 'Commercial') {
      console.log('You have selected a Commercial Branch');
      $('#branch-type').val("Commercial");
    } else if (chosenBranch == 'Souk') {
      console.log('You have selected a Souk Branch');
      $('#branch-type').val("Souk");
    } else if (chosenBranch == 'Neighbourhood') {
      console.log('You have selected a Neighbourhood Branch');
      $('#branch-type').val("Neighbourhood");
    } else if (chosenBranch == 'Mall') {
      console.log('You have selected Mall Branch');
      $('#branch-type').val("Mall");
    } else if (chosenBranch == 'Other') {
      console.log('You have selected an Other Branch');
      $('#branch-type').val("Other");
    } else {
      console.log('No Branch Selected');
    }
  });

  $('#branch-tags').change(function(){
    selectedTag = $(this).val();

    if (selectedTag == 'tag-something') {
      console.log('You have selected a Tag');
    }
  });

  var listBranches = '<option selected="selected" value="0">Please Select a Branch</option>';

  for (var i = 0; i < branchData.Branches.length; i++) {
    listBranches += '<option value="' + branchData.Branches[i].branchCat + '">' + branchData.Branches[i].branchName + '</option>';
  }

  $('#branches').html(listBranches);

  $('#branches').select2();
  $('#branch-tags').select2();

  $('#branches').change(function(){
    $('.branch-version-view').removeClass('hide');
  });
  $('#branch-version').change(function(){
    $('.branch-tags-view').removeClass('hide');
  });
});
