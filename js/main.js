let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".nav");
let exit = document.querySelector('#exit');


const onlineEstimate = () => {
  window.location.href = 'onlineEstimate.html';
}

const techDD = () => {
  const techDropdown = document.getElementById('tech-dd');
  if (window.innerWidth <= 575) {
    techDropdown.style.display = (techDropdown.style.display === "block") ? "none" : "block";
  }
};

document.getElementById("dropdown-tech").addEventListener('click', () => {
  if (window.innerWidth <= 575) {
    techDD();
  }
});

const aboutDD = () => {
  const aboutDropdown = document.getElementById("about-dd");
  if (window.innerWidth <= 575) {
      aboutDropdown.style.display = (aboutDropdown.style.display === "block") ? "none" : "block";
  }
};

document.getElementById("dropdown-about").addEventListener("click", () => {
  if (window.innerWidth <= 575) {
      aboutDD();
  }
});


// Function to reset navigation when touching outside
function resetNavigation(event) {
  if (!navbar.contains(event.target) && event.target !== menu && event.target !== exit) {
      // Clicked outside the navigation
      navbar.classList.remove("active");
      exit.style.display = 'none';
      menu.style.display = 'block';
      
      // Reset dropdowns to their default state
      const techDropdown = document.getElementById('tech-dd');
      const aboutDropdown = document.getElementById("about-dd");
      
      techDropdown.style.display = 'none';
      aboutDropdown.style.display = 'none';
  }
}

// Event listener for touch events on the document body
document.body.addEventListener('touchstart', resetNavigation);


menu.addEventListener('click', function() {
    navbar.classList.toggle("active");
    menu.style.display = 'none';
    exit.style.display = 'block';
});

exit.addEventListener('click', function () {
  navbar.classList.remove("active");
  exit.style.display = 'none';
  menu.style.display = 'block';
  
  // Reset dropdowns to their default state
  const techDropdown = document.getElementById('tech-dd');
  const aboutDropdown = document.getElementById("about-dd");
  
  techDropdown.style.display = 'none';
  aboutDropdown.style.display = 'none';
});




const topographic = () => {
  window.location.href = 'topographic.html';
}



const validate = document.getElementById('validate');


const surveytype = () => {
    const selectedSurveyType = document.getElementById("land_survey_type").value;
    const relocationDiv = document.getElementById("relocation_div");
    const sub_div = document.getElementById("sub_div");
    const consol_div = document.getElementById("consol_div");
    const consol_sub_div = document.getElementById("consol_sub_div");
    const title_div = document.getElementById('title_div');

    // Check if the selected survey type is "RELOCATION"
    if (selectedSurveyType === "RELOCATION") {
        relocationDiv.style.display = "block";
        title_div.style.display = 'none';
    } else {
        relocationDiv.style.display = "none";
    }

    // Check if the selected survey type is "SUB-DIVISION"
    if (selectedSurveyType === "SUB-DIVISION") {
        sub_div.style.display = 'block';
        title_div.style.display = 'block';
    } else {
        sub_div.style.display = 'none';
    }

    // Check if the selected survey type is "CONSOLIDATION"
    if (selectedSurveyType === "CONSOLIDATION") {
        consol_div.style.display = 'block';
        title_div.style.display = 'block';
    } else {
        consol_div.style.display = 'none';
    }

    // Check if the selected survey type is "CONSOLIDATION-SUBDIVISION"
    if (selectedSurveyType === "CONSOLIDATION-SUBDIVISION") {
        consol_sub_div.style.display = 'block';
        title_div.style.display = 'block';
    } else {
        consol_sub_div.style.display = 'none';
    }
}



  function num_console(){
          var num_consolidated = document.getElementById('num_consolidated').value;
          var c_lot_1 = document.getElementById('c_lot_1');
          var c_lot_2 = document.getElementById('c_lot_2');
          var c_lot_3 = document.getElementById('c_lot_3');
          var c_lot_4 = document.getElementById('c_lot_4');
          var c_lot_5 = document.getElementById('c_lot_5');

          

          if(num_consolidated == '2'){
              c_lot_1.style.display = 'block';
              c_lot_2.style.display = 'block';
              c_lot_3.style.display = 'none';
              c_lot_4.style.display = 'none';
              c_lot_5.style.display = 'none';
          }
          else if(num_consolidated == '3'){
              c_lot_1.style.display = 'block';
              c_lot_2.style.display = 'block';
              c_lot_3.style.display = 'block';
              c_lot_4.style.display = 'none';
              c_lot_5.style.display = 'none';
          }
          else if(num_consolidated == '4'){
              c_lot_1.style.display = 'block';
              c_lot_2.style.display = 'block';
              c_lot_3.style.display = 'block';
              c_lot_4.style.display = 'block';
              c_lot_5.style.display = 'none';
          }
          else if(num_consolidated == '5'){
              c_lot_1.style.display = 'block';
              c_lot_2.style.display = 'block';
              c_lot_3.style.display = 'block';
              c_lot_4.style.display = 'block';
              c_lot_5.style.display = 'block';
          }
          else{
              c_lot_1.style.display = 'none';
              c_lot_2.style.display = 'none';
              c_lot_3.style.display = 'none';
              c_lot_4.style.display = 'none';
              c_lot_5.style.display = 'none';
          }
  }

  function cs_num_console(){
          var num_consolidated = document.getElementById('cs_num_consolidated').value;
          var c_lot_1 = document.getElementById('cs_c_lot_1');
          var c_lot_2 = document.getElementById('cs_c_lot_2');
          var c_lot_3 = document.getElementById('cs_c_lot_3');
          var c_lot_4 = document.getElementById('cs_c_lot_4');
          var c_lot_5 = document.getElementById('cs_c_lot_5');

          

          if(num_consolidated == '2'){
              c_lot_1.style.display = 'block';
              c_lot_2.style.display = 'block';
              c_lot_3.style.display = 'none';
              c_lot_4.style.display = 'none';
              c_lot_5.style.display = 'none';
          }
          else if(num_consolidated == '3'){
              c_lot_1.style.display = 'block';
              c_lot_2.style.display = 'block';
              c_lot_3.style.display = 'block';
              c_lot_4.style.display = 'none';
              c_lot_5.style.display = 'none';
          }
          else if(num_consolidated == '4'){
              c_lot_1.style.display = 'block';
              c_lot_2.style.display = 'block';
              c_lot_3.style.display = 'block';
              c_lot_4.style.display = 'block';
              c_lot_5.style.display = 'none';
          }
          else if(num_consolidated == '5'){
              c_lot_1.style.display = 'block';
              c_lot_2.style.display = 'block';
              c_lot_3.style.display = 'block';
              c_lot_4.style.display = 'block';
              c_lot_5.style.display = 'block';
          }
          else{
              c_lot_1.style.display = 'none';
              c_lot_2.style.display = 'none';
              c_lot_3.style.display = 'none';
              c_lot_4.style.display = 'none';
              c_lot_5.style.display = 'none';
          }
  }

  function check_box_click(){
          var checkBox = document.getElementById("check_box");
          var s_total_num_corner_display = document.getElementById('s_total_num_corner_display');
          var advance_opt = document.getElementById('advance_opt');

          if (checkBox.checked == true){
              advance_opt.style.display = "block";
              s_total_num_corner_display.style.display = "none";
          } else {
             advance_opt.style.display = "none";
             s_total_num_corner_display.style.display = "block";
          }
  }

  function cs_check_box_click(){
          var cs_checkBox = document.getElementById("cs_check_box");
          var cs_s_total_num_corner_display = document.getElementById('cs_s_total_num_corner_display');
          var cs_advance_opt = document.getElementById('cs_advance_opt');

          if (cs_checkBox.checked == true){
              cs_advance_opt.style.display = "block";
              cs_s_total_num_corner_display.style.display = "none";
          } else {
             cs_advance_opt.style.display = "none";
             cs_s_total_num_corner_display.style.display = "block";
          }
  }


  function num_sub_lot(){
          var num_sub_divided = document.getElementById('num_sub_divided').value;
          var s_sub1 = document.getElementById('s_sub1');
          var s_sub2 = document.getElementById('s_sub2');
          var s_sub3 = document.getElementById('s_sub3');
          var s_sub4 = document.getElementById('s_sub4');
          var s_sub5 = document.getElementById('s_sub5');
          var s_sub6 = document.getElementById('s_sub6');
          var s_sub7 = document.getElementById('s_sub7');
          var s_sub8 = document.getElementById('s_sub8');
          var s_sub9 = document.getElementById('s_sub9');
          var s_sub10 = document.getElementById('s_sub10');

          if (num_sub_divided == '2') {
                s_sub1.style.display = 'block';
                s_sub2.style.display = 'block';
                s_sub3.style.display = 'none';
                s_sub4.style.display = 'none';
                s_sub5.style.display = 'none';
                s_sub6.style.display = 'none';
                s_sub7.style.display = 'none';
                s_sub8.style.display = 'none';
                s_sub9.style.display = 'none';
                s_sub10.style.display = 'none';

          }
          else if (num_sub_divided == '3') {
                s_sub1.style.display = 'block';
                s_sub2.style.display = 'block';
                s_sub3.style.display = 'block';
                s_sub4.style.display = 'none';
                s_sub5.style.display = 'none';
                s_sub6.style.display = 'none';
                s_sub7.style.display = 'none';
                s_sub8.style.display = 'none';
                s_sub9.style.display = 'none';
                s_sub10.style.display = 'none';

          }
          else if (num_sub_divided == '4') {
                s_sub1.style.display = 'block';
                s_sub2.style.display = 'block';
                s_sub3.style.display = 'block';
                s_sub4.style.display = 'block';
                s_sub5.style.display = 'none';
                s_sub6.style.display = 'none';
                s_sub7.style.display = 'none';
                s_sub8.style.display = 'none';
                s_sub9.style.display = 'none';
                s_sub10.style.display = 'none';

          }
          else if (num_sub_divided == '5') {
                s_sub1.style.display = 'block';
                s_sub2.style.display = 'block';
                s_sub3.style.display = 'block';
                s_sub4.style.display = 'block';
                s_sub5.style.display = 'block';
                s_sub6.style.display = 'none';
                s_sub7.style.display = 'none';
                s_sub8.style.display = 'none';
                s_sub9.style.display = 'none';
                s_sub10.style.display = 'none';

          }
          else if (num_sub_divided == '6') {
                s_sub1.style.display = 'block';
                s_sub2.style.display = 'block';
                s_sub3.style.display = 'block';
                s_sub4.style.display = 'block';
                s_sub5.style.display = 'block';
                s_sub6.style.display = 'block';
                s_sub7.style.display = 'none';
                s_sub8.style.display = 'none';
                s_sub9.style.display = 'none';
                s_sub10.style.display = 'none';

          }
          else if (num_sub_divided == '7') {
                s_sub1.style.display = 'block';
                s_sub2.style.display = 'block';
                s_sub3.style.display = 'block';
                s_sub4.style.display = 'block';
                s_sub5.style.display = 'block';
                s_sub6.style.display = 'block';
                s_sub7.style.display = 'block';
                s_sub8.style.display = 'none';
                s_sub9.style.display = 'none';
                s_sub10.style.display = 'none';

          }
          else if (num_sub_divided == '8') {
                s_sub1.style.display = 'block';
                s_sub2.style.display = 'block';
                s_sub3.style.display = 'block';
                s_sub4.style.display = 'block';
                s_sub5.style.display = 'block';
                s_sub6.style.display = 'block';
                s_sub7.style.display = 'block';
                s_sub8.style.display = 'block';
                s_sub9.style.display = 'none';
                s_sub10.style.display = 'none';

          }
          else if (num_sub_divided == '9') {
                s_sub1.style.display = 'block';
                s_sub2.style.display = 'block';
                s_sub3.style.display = 'block';
                s_sub4.style.display = 'block';
                s_sub5.style.display = 'block';
                s_sub6.style.display = 'block';
                s_sub7.style.display = 'block';
                s_sub8.style.display = 'block';
                s_sub9.style.display = 'block';
                s_sub10.style.display = 'none';

          }
          else if (num_sub_divided == '10') {
                s_sub1.style.display = 'block';
                s_sub2.style.display = 'block';
                s_sub3.style.display = 'block';
                s_sub4.style.display = 'block';
                s_sub5.style.display = 'block';
                s_sub6.style.display = 'block';
                s_sub7.style.display = 'block';
                s_sub8.style.display = 'block';
                s_sub9.style.display = 'block';
                s_sub10.style.display = 'block';

          }else{
                s_sub1.style.display = 'none';
                s_sub2.style.display = 'none';
                s_sub3.style.display = 'none';
                s_sub4.style.display = 'none';
                s_sub5.style.display = 'none';
                s_sub6.style.display = 'none';
                s_sub7.style.display = 'none';
                s_sub8.style.display = 'none';
                s_sub9.style.display = 'none';
                s_sub10.style.display = 'none';
          }


  }

  function cs_num_sub_lot(){
          var cs_num_sub_divided = document.getElementById('cs_num_sub_divided').value;
          var cs_s_sub1 = document.getElementById('cs_s_sub1');
          var cs_s_sub2 = document.getElementById('cs_s_sub2');
          var cs_s_sub3 = document.getElementById('cs_s_sub3');
          var cs_s_sub4 = document.getElementById('cs_s_sub4');
          var cs_s_sub5 = document.getElementById('cs_s_sub5');
          var cs_s_sub6 = document.getElementById('cs_s_sub6');
          var cs_s_sub7 = document.getElementById('cs_s_sub7');
          var cs_s_sub8 = document.getElementById('cs_s_sub8');
          var cs_s_sub9 = document.getElementById('cs_s_sub9');
          var cs_s_sub10 = document.getElementById('cs_s_sub10');

          if (cs_num_sub_divided == '2') {
                cs_s_sub1.style.display = 'block';
                cs_s_sub2.style.display = 'block';
                cs_s_sub3.style.display = 'none';
                cs_s_sub4.style.display = 'none';
                cs_s_sub5.style.display = 'none';
                cs_s_sub6.style.display = 'none';
                cs_s_sub7.style.display = 'none';
                cs_s_sub8.style.display = 'none';
                cs_s_sub9.style.display = 'none';
                cs_s_sub10.style.display = 'none';

          }
          else if (cs_num_sub_divided == '3') {
                cs_s_sub1.style.display = 'block';
                cs_s_sub2.style.display = 'block';
                cs_s_sub3.style.display = 'block';
                cs_s_sub4.style.display = 'none';
                cs_s_sub5.style.display = 'none';
                cs_s_sub6.style.display = 'none';
                cs_s_sub7.style.display = 'none';
                cs_s_sub8.style.display = 'none';
                cs_s_sub9.style.display = 'none';
                cs_s_sub10.style.display = 'none';

          }
          else if (cs_num_sub_divided == '4') {
                cs_s_sub1.style.display = 'block';
                cs_s_sub2.style.display = 'block';
                cs_s_sub3.style.display = 'block';
                cs_s_sub4.style.display = 'block';
                cs_s_sub5.style.display = 'none';
                cs_s_sub6.style.display = 'none';
                cs_s_sub7.style.display = 'none';
                cs_s_sub8.style.display = 'none';
                cs_s_sub9.style.display = 'none';
                cs_s_sub10.style.display = 'none';

          }
          else if (cs_num_sub_divided == '5') {
                cs_s_sub1.style.display = 'block';
                cs_s_sub2.style.display = 'block';
                cs_s_sub3.style.display = 'block';
                cs_s_sub4.style.display = 'block';
                cs_s_sub5.style.display = 'block';
                cs_s_sub6.style.display = 'none';
                cs_s_sub7.style.display = 'none';
                cs_s_sub8.style.display = 'none';
                cs_s_sub9.style.display = 'none';
                cs_s_sub10.style.display = 'none';

          }
          else if (cs_num_sub_divided == '6') {
                cs_s_sub1.style.display = 'block';
                cs_s_sub2.style.display = 'block';
                cs_s_sub3.style.display = 'block';
                cs_s_sub4.style.display = 'block';
                cs_s_sub5.style.display = 'block';
                cs_s_sub6.style.display = 'block';
                cs_s_sub7.style.display = 'none';
                cs_s_sub8.style.display = 'none';
                cs_s_sub9.style.display = 'none';
                cs_s_sub10.style.display = 'none';

          }
          else if (cs_num_sub_divided == '7') {
                cs_s_sub1.style.display = 'block';
                cs_s_sub2.style.display = 'block';
                cs_s_sub3.style.display = 'block';
                cs_s_sub4.style.display = 'block';
                cs_s_sub5.style.display = 'block';
                cs_s_sub6.style.display = 'block';
                cs_s_sub7.style.display = 'block';
                cs_s_sub8.style.display = 'none';
                cs_s_sub9.style.display = 'none';
                cs_s_sub10.style.display = 'none';

          }
          else if (cs_num_sub_divided == '8') {
                cs_s_sub1.style.display = 'block';
                cs_s_sub2.style.display = 'block';
                cs_s_sub3.style.display = 'block';
                cs_s_sub4.style.display = 'block';
                cs_s_sub5.style.display = 'block';
                cs_s_sub6.style.display = 'block';
                cs_s_sub7.style.display = 'block';
                cs_s_sub8.style.display = 'block';
                cs_s_sub9.style.display = 'none';
                cs_s_sub10.style.display = 'none';

          }
          else if (cs_num_sub_divided == '9') {
                cs_s_sub1.style.display = 'block';
                cs_s_sub2.style.display = 'block';
                cs_s_sub3.style.display = 'block';
                cs_s_sub4.style.display = 'block';
                cs_s_sub5.style.display = 'block';
                cs_s_sub6.style.display = 'block';
                cs_s_sub7.style.display = 'block';
                cs_s_sub8.style.display = 'block';
                cs_s_sub9.style.display = 'block';
                cs_s_sub10.style.display = 'none';

          }
          else if (cs_num_sub_divided == '10') {
                cs_s_sub1.style.display = 'block';
                cs_s_sub2.style.display = 'block';
                cs_s_sub3.style.display = 'block';
                cs_s_sub4.style.display = 'block';
                cs_s_sub5.style.display = 'block';
                cs_s_sub6.style.display = 'block';
                cs_s_sub7.style.display = 'block';
                cs_s_sub8.style.display = 'block';
                cs_s_sub9.style.display = 'block';
                cs_s_sub10.style.display = 'block';

          }else{
                cs_s_sub1.style.display = 'none';
                cs_s_sub2.style.display = 'none';
                cs_s_sub3.style.display = 'none';
                cs_s_sub4.style.display = 'none';
                cs_s_sub5.style.display = 'none';
                cs_s_sub6.style.display = 'none';
                cs_s_sub7.style.display = 'none';
                cs_s_sub8.style.display = 'none';
                cs_s_sub9.style.display = 'none';
                cs_s_sub10.style.display = 'none';
          }


  }



  function calculate(){
          var surveytype = document.getElementById("land_survey_type").value;
          var type_display = document.getElementById('land_survey_type_display');
          var total_display = document.getElementById('total_display');
          var total_excess_amount_display = document.getElementById('total_excess_amount_display');
          var excess_lot_detail = document.getElementById('excess_lot_detail');
          var excess_lot_amount_display = document.getElementById('excess_lot_amount_display');
          var excess_corner_detail = document.getElementById('excess_corner_detail');
          var excess_corner_amount_display = document.getElementById('excess_corner_amount_display');
          var survey_type_price_display = document.getElementById('survey_type_price_display');
          var summary_body = document.getElementById('summary_body');
          var survey_auth_amount_display = document.getElementById('survey_auth_amount_display');
          var alert_warning = document.getElementById('alert_warning');
          var survey_auth_details = document.getElementById('survey_auth_details');
          var survey_auth_display = document.getElementById('survey_auth_display');
          var price = 6000;
          total_display.innerHTML = "";


          if (surveytype == 'RELOCATION') {
              var r_lot_area = document.getElementById('r_lot_area').value;
              var r_num_corner = document.getElementById('r_num_corner').value;
              check(r_lot_area);
              check(r_num_corner);
              

              if (check(r_lot_area) && check(r_num_corner)) {
              total_excess_amount = get_excess_area_price(get_excess_area(r_lot_area)) + get_excess_corner_price(excess_corner_compute(r_num_corner));
              total_survey_cost = price + total_excess_amount;
              type_display.innerHTML = surveytype;
              total_display.innerHTML = '₱ ' + total_survey_cost.toLocaleString() + '.00 **' ;
              excess_lot_detail.innerHTML = '1,500  x  ' + get_excess_area(r_lot_area) + '  =  ';
              excess_lot_amount_display.innerHTML =  get_excess_area_price(get_excess_area(r_lot_area)).toLocaleString() + '.00';
              excess_corner_detail.innerHTML = '600  x  ' + excess_corner_compute(r_num_corner) + '  =  ';
              excess_corner_amount_display.innerHTML =  get_excess_corner_price(excess_corner_compute(r_num_corner)).toLocaleString() + '.00';
              summary_body.style.display = 'block';
              alert_warning.style.display = 'block';

              }
              


          }
          else if(surveytype == 'SUB-DIVISION'){
              var s_lot_area = document.getElementById('s_lot_area').value;
              var s_num_corner = document.getElementById('s_num_corner').value;
              var num_sub_divided = document.getElementById('num_sub_divided').value;
              var radios = document.getElementsByName('optradio');


              
              check(s_lot_area);
              check(s_num_corner);
              check(num_sub_divided);
              check(radios);
              check(s_get_total_corner());
              


              if ( check(s_lot_area) && check(s_num_corner) && check(num_sub_divided) && check(radios) && check(s_get_total_corner()) ) {

              get_radio_val(radios);
              

              total_sub_corner(num_sub_divided , s_get_total_corner());
              get_excess_corner_price(total_sub_corner(num_sub_divided , s_get_total_corner()));
              
              
              excess_lot_detail.innerHTML = '1,500  x  ' + get_excess_area(s_lot_area) + '  =  ';
              excess_lot_amount_display.innerHTML =  get_excess_area_price(get_excess_area(s_lot_area)).toLocaleString() + '.00';
              excess_corner_detail.innerHTML = '600  x  ' + total_sub_corner(num_sub_divided , s_get_total_corner()) + ' = ' ;
              excess_corner_amount_display.innerHTML = get_excess_corner_price(total_sub_corner(num_sub_divided , s_get_total_corner())).toLocaleString() + '.00';
              survey_type_details.innerHTML = price + '  x  ' + ((Number(num_sub_divided))) + ' = ';
              survey_type_price_display.innerHTML =  (price * num_sub_divided).toLocaleString() + '.00';
              type_display.innerHTML = surveytype;
              total_survey_cost = [(price * num_sub_divided) + radio_price(get_radio_val(radios)) + get_excess_corner_price(total_sub_corner(num_sub_divided , s_get_total_corner())) + get_excess_area_price(get_excess_area(s_lot_area))];
              total_display.innerHTML = 'P ' + total_survey_cost.toLocaleString() + '.00' + ' ** ';
              summary_body.style.display = 'block';
              survey_auth_display.style.display = 'table-row'
              survey_auth_amount_display.innerHTML = radio_price(get_radio_val(radios)).toLocaleString() + '.00';
              alert_warning.style.display = 'block';
              


              clearselects();
            }
          }

          else if (surveytype == 'CONSOLIDATION') {
              var num_consolidated = parseInt(document.getElementById('num_consolidated').value); 
              var radios = document.getElementsByName('optradio');
              var c_total_ex_lot;
              var c_total_ex_corner;

              c_get_total_ex();
              check(num_consolidated);
              check(c_get_total_ex());
              

              if (check(num_consolidated) && check(c_get_total_ex())) {

                    
                    c_total_ex_lot = c_get_total_ex()[0];
                    c_total_ex_corner = c_get_total_ex()[1];

                    total_excess_amount = get_excess_area_price(c_total_ex_lot) + get_excess_corner_price(c_total_ex_corner);
                    

                    excess_lot_detail.innerHTML = '1,500  x  ' + c_total_ex_lot + '  =  ';
                            
                    excess_lot_amount_display.innerHTML =  get_excess_area_price(c_total_ex_lot).toLocaleString() + '.00';

                    excess_corner_detail.innerHTML = '600  x  ' + c_total_ex_corner  + '  =  ';
                    excess_corner_amount_display.innerHTML =  get_excess_corner_price(c_total_ex_corner).toLocaleString() + '.00';

                    type_display.innerHTML = surveytype;
                    survey_type_details.innerHTML = price + '  x  ' + ((Number(num_consolidated))) + ' = ';
                    survey_type_price_display.innerHTML =  (price * (Number(num_consolidated))).toLocaleString() + '.00';
                    survey_auth_details.innerHTML = '3,000  x  ' + (Number(num_consolidated) * get_radio_val(radios)) + '  =  ';
                    survey_auth_amount_display.innerHTML = (radio_price(get_radio_val(radios)) * Number(num_consolidated )).toLocaleString() + '.00';
                    total_display.innerHTML = 'P ' + ((price * (Number(num_consolidated) + 1)) + total_excess_amount + (radio_price(get_radio_val(radios)) * Number(num_consolidated ))).toLocaleString() + '.00' + ' ** ';
                    summary_body.style.display = 'block';
                    alert_warning.style.display = 'block';
                    survey_auth_display.style.display = 'table-row'

                    clearselectc(); 
              }
              
              
          }

          else if (surveytype == 'CONSOLIDATION-SUBDIVISION') {
                                  
                  var num_consolidated = document.getElementById('cs_num_consolidated').value;
                  var radios = document.getElementsByName('optradio');
                  var c_total_ex_lot;
                  var c_total_ex_corner;

                  // var s_lot_area = document.getElementById('cs_s_lot_area').value;
                  // var s_num_corner = document.getElementById('cs_s_num_corner').value;
                  var num_sub_divided = document.getElementById('cs_num_sub_divided').value;
                  
                  cs_c_get_total_ex();
                  check(num_consolidated);
                  check(cs_c_get_total_ex());
                  // check(s_lot_area);
                  // check(s_num_corner);
                  check(num_sub_divided);
                  check(radios);
                  check(cs_s_get_total_corner());

                  if (check(num_consolidated) && check(cs_c_get_total_ex()) && check(num_sub_divided) && check(radios) && check(cs_s_get_total_corner())) {

                    
                    c_total_ex_lot = cs_c_get_total_ex()[0];
                    // c_total_ex_corner = cs_c_get_total_ex()[1];
                    c_total_ex_corner = total_sub_corner(num_sub_divided , cs_s_get_total_corner());

                    total_excess_amount = get_excess_area_price(c_total_ex_lot) + get_excess_corner_price(total_sub_corner(num_sub_divided , cs_s_get_total_corner()));
                    

                    excess_lot_detail.innerHTML = '1,500  x  ' + c_total_ex_lot + '  =  ';
                            
                    excess_lot_amount_display.innerHTML =  get_excess_area_price(c_total_ex_lot).toLocaleString() + '.00';

                    excess_corner_detail.innerHTML = '600  x  ' + c_total_ex_corner  + '  =  ';
                    excess_corner_amount_display.innerHTML =  get_excess_corner_price(c_total_ex_corner).toLocaleString() + '.00';

                    type_display.innerHTML = surveytype;
                    survey_type_price_display.innerHTML =  ((price * Number(num_consolidated)) + (price * num_sub_divided)).toLocaleString() + '.00';
                    survey_auth_details.innerHTML = '3,000  x  ' + (Number(num_consolidated) * get_radio_val(radios)) + '  =  ';
                    survey_auth_amount_display.innerHTML = (radio_price(get_radio_val(radios)) * Number(num_consolidated )).toLocaleString() + '.00';
                    total_display.innerHTML = 'P ' + (((price * Number(num_consolidated)) + (price * num_sub_divided)) + total_excess_amount + (radio_price(get_radio_val(radios)) * Number(num_consolidated ))).toLocaleString() + '.00' + ' ** ';
                    summary_body.style.display = 'block';
                    alert_warning.style.display = 'block';
                    survey_auth_display.style.display = 'table-row'

                    clearselectcs(); 
              }


            //   if ( check(s_lot_area) && check(s_num_corner) && check(num_sub_divided) && check(radios) && check(cs_s_get_total_corner()) ) {

            //   get_radio_val(radios);
              

            //   total_sub_corner(num_sub_divided , cs_s_get_total_corner());
            //   get_excess_corner_price(total_sub_corner(num_sub_divided , cs_s_get_total_corner()));
              

            //   excess_corner_detail.innerHTML = '600  x  ' + total_sub_corner(num_sub_divided , cs_s_get_total_corner()) + ' = ' ;
            //   excess_corner_amount_display.innerHTML = get_excess_corner_price(total_sub_corner(num_sub_divided , cs_s_get_total_corner())).toLocaleString() + '.00';
            //   survey_type_detail.innerHTML = price + '  x  ' + num_sub_divided + ' = ';
            //   survey_type_price_display.innerHTML =  (price * num_sub_divided).toLocaleString() + '.00';
            //   type_display.innerHTML = surveytype;
            //   total_survey_cost = [(price * num_sub_divided) + radio_price(get_radio_val(radios)) + get_excess_corner_price(total_sub_corner(num_sub_divided , s_get_total_corner()))];
            //   total_display.innerHTML = 'P ' + total_survey_cost.toLocaleString() + '.00' + ' * ';
            //   summary_body.style.display = 'block';
              
            //   survey_auth_amount_display.innerHTML = radio_price(get_radio_val(radios)).toLocaleString() + '.00';
            //   alert_warning.style.display = 'block';

            // }
            
          }


  }

  function c_get_total_ex(){
        var num_consolidated = document.getElementById('num_consolidated').value;
        var c_lot_1_area = document.getElementById('c_lot_1_area').value;
        var c_lot_2_area = document.getElementById('c_lot_2_area').value;
        var c_lot_3_area = document.getElementById('c_lot_3_area').value;
        var c_lot_4_area = document.getElementById('c_lot_4_area').value;
        var c_lot_5_area = document.getElementById('c_lot_5_area').value;
        var c_num_1_corner = document.getElementById('c_num_1_corner').value;
        var c_num_2_corner = document.getElementById('c_num_2_corner').value;
        var c_num_3_corner = document.getElementById('c_num_3_corner').value;
        var c_num_4_corner = document.getElementById('c_num_4_corner').value;
        var c_num_5_corner = document.getElementById('c_num_5_corner').value;
        
        if (num_consolidated == '2') {
            
            if (check(c_lot_1_area) && check(c_lot_2_area) && check(c_num_1_corner) && check(c_num_2_corner)) {
                c_total_ex_lot = Number(get_excess_area(c_lot_1_area)) + Number(get_excess_area(c_lot_2_area)) + Number(get_excess_area(c_lot_3_area)) + Number(get_excess_area(c_lot_4_area)) + Number(get_excess_area(c_lot_5_area));
                c_total_ex_corner = Number(excess_corner_compute(c_num_1_corner)) + Number(excess_corner_compute(c_num_2_corner)) + Number(excess_corner_compute(c_num_3_corner)) + Number(excess_corner_compute(c_num_4_corner)) + Number(excess_corner_compute(c_num_5_corner));
                return [c_total_ex_lot , c_total_ex_corner];

            }
            return false;
        }
        else if (num_consolidated == '3') {
            
            if (check(c_lot_1_area) && check(c_lot_2_area) && check(c_lot_3_area) && check(c_num_1_corner) && check(c_num_2_corner) && check(c_num_3_corner)) {
                c_total_ex_lot = Number(get_excess_area(c_lot_1_area)) + Number(get_excess_area(c_lot_2_area)) + Number(get_excess_area(c_lot_3_area)) + Number(get_excess_area(c_lot_4_area)) + Number(get_excess_area(c_lot_5_area));
                c_total_ex_corner = Number(excess_corner_compute(c_num_1_corner)) + Number(excess_corner_compute(c_num_2_corner)) + Number(excess_corner_compute(c_num_3_corner)) + Number(excess_corner_compute(c_num_4_corner)) + Number(excess_corner_compute(c_num_5_corner));
                return [c_total_ex_lot , c_total_ex_corner];
            }
            return false;
        }
        else if (num_consolidated == '4') {
           
            if (check(c_lot_1_area) && check(c_lot_2_area) && check(c_lot_3_area) && check(c_lot_4_area) && check(c_num_1_corner) && check(c_num_2_corner) && check(c_num_3_corner) && check(c_num_4_corner)) {
                c_total_ex_lot = Number(get_excess_area(c_lot_1_area)) + Number(get_excess_area(c_lot_2_area)) + Number(get_excess_area(c_lot_3_area)) + Number(get_excess_area(c_lot_4_area)) + Number(get_excess_area(c_lot_5_area));
                c_total_ex_corner = Number(excess_corner_compute(c_num_1_corner)) + Number(excess_corner_compute(c_num_2_corner)) + Number(excess_corner_compute(c_num_3_corner)) + Number(excess_corner_compute(c_num_4_corner)) + Number(excess_corner_compute(c_num_5_corner));
                return [c_total_ex_lot , c_total_ex_corner];
            }
            return false;
        }
        else if (num_consolidated == '5') {
            
            if (check(c_lot_1_area) && check(c_lot_2_area) && check(c_lot_3_area) && check(c_lot_4_area)  && check(c_lot_5_area) && check(c_num_1_corner) && check(c_num_2_corner) && check(c_num_3_corner) && check(c_num_4_corner) && check(c_num_5_corner)) {
                c_total_ex_lot = Number(get_excess_area(c_lot_1_area)) + Number(get_excess_area(c_lot_2_area)) + Number(get_excess_area(c_lot_3_area)) + Number(get_excess_area(c_lot_4_area)) + Number(get_excess_area(c_lot_5_area));
                c_total_ex_corner = Number(excess_corner_compute(c_num_1_corner)) + Number(excess_corner_compute(c_num_2_corner)) + Number(excess_corner_compute(c_num_3_corner)) + Number(excess_corner_compute(c_num_4_corner)) + Number(excess_corner_compute(c_num_5_corner));
                return [c_total_ex_lot , c_total_ex_corner];
            }
            return false;
        }

        
  }

  function cs_c_get_total_ex(){
        var num_consolidated = document.getElementById('cs_num_consolidated').value;
        var c_lot_1_area = document.getElementById('cs_c_lot_1_area').value;
        var c_lot_2_area = document.getElementById('cs_c_lot_2_area').value;
        var c_lot_3_area = document.getElementById('cs_c_lot_3_area').value;
        var c_lot_4_area = document.getElementById('cs_c_lot_4_area').value;
        var c_lot_5_area = document.getElementById('cs_c_lot_5_area').value;
        // var c_num_1_corner = document.getElementById('cs_c_num_1_corner').value;
        // var c_num_2_corner = document.getElementById('cs_c_num_2_corner').value;
        // var c_num_3_corner = document.getElementById('cs_c_num_3_corner').value;
        // var c_num_4_corner = document.getElementById('cs_c_num_4_corner').value;
        // var c_num_5_corner = document.getElementById('cs_c_num_5_corner').value;


        if (num_consolidated == '2') {
            
            if (check(c_lot_1_area) && check(c_lot_2_area)) {
              // if (check(c_lot_1_area) && check(c_lot_2_area) && check(c_num_1_corner) && check(c_num_2_corner)) {
                c_total_ex_lot = Number(get_excess_area(c_lot_1_area)) + Number(get_excess_area(c_lot_2_area)) + Number(get_excess_area(c_lot_3_area)) + Number(get_excess_area(c_lot_4_area)) + Number(get_excess_area(c_lot_5_area));
                c_total_ex_corner = Number(excess_corner_compute(c_num_1_corner)) + Number(excess_corner_compute(c_num_2_corner)) + Number(excess_corner_compute(c_num_3_corner)) + Number(excess_corner_compute(c_num_4_corner)) + Number(excess_corner_compute(c_num_5_corner));
                return [c_total_ex_lot , c_total_ex_corner];

            }
            return false;
        }
        else if (num_consolidated == '3') {
            
            if (check(c_lot_1_area) && check(c_lot_2_area) && check(c_lot_3_area)) {
              // if (check(c_lot_1_area) && check(c_lot_2_area) && check(c_lot_3_area) && check(c_num_1_corner) && check(c_num_2_corner) && check(c_num_3_corner)) {
                c_total_ex_lot = Number(get_excess_area(c_lot_1_area)) + Number(get_excess_area(c_lot_2_area)) + Number(get_excess_area(c_lot_3_area)) + Number(get_excess_area(c_lot_4_area)) + Number(get_excess_area(c_lot_5_area));
                c_total_ex_corner = Number(excess_corner_compute(c_num_1_corner)) + Number(excess_corner_compute(c_num_2_corner)) + Number(excess_corner_compute(c_num_3_corner)) + Number(excess_corner_compute(c_num_4_corner)) + Number(excess_corner_compute(c_num_5_corner));
                return [c_total_ex_lot , c_total_ex_corner];
            }
            return false;
        }
        else if (num_consolidated == '4') {
           
            if (check(c_lot_1_area) && check(c_lot_2_area) && check(c_lot_3_area) && check(c_lot_4_area)) {
              // if (check(c_lot_1_area) && check(c_lot_2_area) && check(c_lot_3_area) && check(c_lot_4_area) && check(c_num_1_corner) && check(c_num_2_corner) && check(c_num_3_corner) && check(c_num_4_corner)) {
                c_total_ex_lot = Number(get_excess_area(c_lot_1_area)) + Number(get_excess_area(c_lot_2_area)) + Number(get_excess_area(c_lot_3_area)) + Number(get_excess_area(c_lot_4_area)) + Number(get_excess_area(c_lot_5_area));
                c_total_ex_corner = Number(excess_corner_compute(c_num_1_corner)) + Number(excess_corner_compute(c_num_2_corner)) + Number(excess_corner_compute(c_num_3_corner)) + Number(excess_corner_compute(c_num_4_corner)) + Number(excess_corner_compute(c_num_5_corner));
                return [c_total_ex_lot , c_total_ex_corner];
            }
            return false;
        }
        else if (num_consolidated == '5') {
            
            if (check(c_lot_1_area) && check(c_lot_2_area) && check(c_lot_3_area) && check(c_lot_4_area)  && check(c_lot_5_area)) {
              // if (check(c_lot_1_area) && check(c_lot_2_area) && check(c_lot_3_area) && check(c_lot_4_area)  && check(c_lot_5_area) && check(c_num_1_corner) && check(c_num_2_corner) && check(c_num_3_corner) && check(c_num_4_corner) && check(c_num_5_corner)) {
                c_total_ex_lot = Number(get_excess_area(c_lot_1_area)) + Number(get_excess_area(c_lot_2_area)) + Number(get_excess_area(c_lot_3_area)) + Number(get_excess_area(c_lot_4_area)) + Number(get_excess_area(c_lot_5_area));
                c_total_ex_corner = Number(excess_corner_compute(c_num_1_corner)) + Number(excess_corner_compute(c_num_2_corner)) + Number(excess_corner_compute(c_num_3_corner)) + Number(excess_corner_compute(c_num_4_corner)) + Number(excess_corner_compute(c_num_5_corner));
                return [c_total_ex_lot , c_total_ex_corner];
            }
            return false;
        }
        


        
  }

  
  function s_get_total_corner(){
        var checkBox = document.getElementById("check_box");
        var num_sub_divided = document.getElementById('num_sub_divided').value;
        var s_total_num_corner = document.getElementById('s_total_num_corner').value;
        var s_sub1_num_corner = document.getElementById('s_sub1_num_corner').value;
        var s_sub2_num_corner = document.getElementById('s_sub2_num_corner').value;
        var s_sub3_num_corner = document.getElementById('s_sub3_num_corner').value;
        var s_sub4_num_corner = document.getElementById('s_sub4_num_corner').value;
        var s_sub5_num_corner = document.getElementById('s_sub5_num_corner').value;
        var s_sub6_num_corner = document.getElementById('s_sub6_num_corner').value;
        var s_sub7_num_corner = document.getElementById('s_sub7_num_corner').value;
        var s_sub8_num_corner = document.getElementById('s_sub8_num_corner').value;
        var s_sub9_num_corner = document.getElementById('s_sub9_num_corner').value;
        var s_sub10_num_corner = document.getElementById('s_sub10_num_corner').value;
        // var sub_total_corner;

        if (checkBox.checked == true){
          if (num_sub_divided == '2') {
            if (check(s_sub1_num_corner) && check(s_sub2_num_corner)) {
              return  Number(s_sub1_num_corner) + Number(s_sub2_num_corner) + Number(s_sub3_num_corner) + Number(s_sub4_num_corner) + Number(s_sub5_num_corner) + Number(s_sub6_num_corner) + Number(s_sub7_num_corner) + Number(s_sub8_num_corner) + Number(s_sub9_num_corner) + Number(s_sub10_num_corner);
            }else{
              return false;
            }
          }else if (num_sub_divided == '3') {
            if (check(s_sub1_num_corner) && check(s_sub2_num_corner) && check(s_sub3_num_corner)) {
              return  Number(s_sub1_num_corner) + Number(s_sub2_num_corner) + Number(s_sub3_num_corner) + Number(s_sub4_num_corner) + Number(s_sub5_num_corner) + Number(s_sub6_num_corner) + Number(s_sub7_num_corner) + Number(s_sub8_num_corner) + Number(s_sub9_num_corner) + Number(s_sub10_num_corner);
            }else{
              return false;
            }
          }else if (num_sub_divided == '4') {
            if (check(s_sub1_num_corner) && check(s_sub2_num_corner) && check(s_sub3_num_corner) && check(s_sub4_num_corner)) {
              return  Number(s_sub1_num_corner) + Number(s_sub2_num_corner) + Number(s_sub3_num_corner) + Number(s_sub4_num_corner) + Number(s_sub5_num_corner) + Number(s_sub6_num_corner) + Number(s_sub7_num_corner) + Number(s_sub8_num_corner) + Number(s_sub9_num_corner) + Number(s_sub10_num_corner);
            }else{
              return false;
            }
          }else if (num_sub_divided == '5') {
            if (check(s_sub1_num_corner) && check(s_sub2_num_corner) && check(s_sub3_num_corner) && check(s_sub4_num_corner) && check(s_sub5_num_corner)) {
              return  Number(s_sub1_num_corner) + Number(s_sub2_num_corner) + Number(s_sub3_num_corner) + Number(s_sub4_num_corner) + Number(s_sub5_num_corner) + Number(s_sub6_num_corner) + Number(s_sub7_num_corner) + Number(s_sub8_num_corner) + Number(s_sub9_num_corner) + Number(s_sub10_num_corner);
            }else{
              return false;
            }
          }else if (num_sub_divided == '6') {
            if (check(s_sub1_num_corner) && check(s_sub2_num_corner) && check(s_sub3_num_corner) && check(s_sub4_num_corner) && check(s_sub5_num_corner) && check(s_sub6_num_corner)) {
              return  Number(s_sub1_num_corner) + Number(s_sub2_num_corner) + Number(s_sub3_num_corner) + Number(s_sub4_num_corner) + Number(s_sub5_num_corner) + Number(s_sub6_num_corner) + Number(s_sub7_num_corner) + Number(s_sub8_num_corner) + Number(s_sub9_num_corner) + Number(s_sub10_num_corner);
            }else{
              return false;
            }
          }else if (num_sub_divided == '7') {
            if (check(s_sub1_num_corner) && check(s_sub2_num_corner) && check(s_sub3_num_corner) && check(s_sub4_num_corner) && check(s_sub5_num_corner) && check(s_sub6_num_corner) && check(s_sub7_num_corner)) {
              return  Number(s_sub1_num_corner) + Number(s_sub2_num_corner) + Number(s_sub3_num_corner) + Number(s_sub4_num_corner) + Number(s_sub5_num_corner) + Number(s_sub6_num_corner) + Number(s_sub7_num_corner) + Number(s_sub8_num_corner) + Number(s_sub9_num_corner) + Number(s_sub10_num_corner);
            }else{
              return false;
            }
          }
          else if (num_sub_divided == '8') {
            if (check(s_sub1_num_corner) && check(s_sub2_num_corner) && check(s_sub3_num_corner) && check(s_sub4_num_corner) && check(s_sub5_num_corner) && check(s_sub6_num_corner) && check(s_sub7_num_corner) && check(s_sub8_num_corner)) {
              return  Number(s_sub1_num_corner) + Number(s_sub2_num_corner) + Number(s_sub3_num_corner) + Number(s_sub4_num_corner) + Number(s_sub5_num_corner) + Number(s_sub6_num_corner) + Number(s_sub7_num_corner) + Number(s_sub8_num_corner) + Number(s_sub9_num_corner) + Number(s_sub10_num_corner);
            }else{
              return false;
            }
          }else if (num_sub_divided == '9') {
            if (check(s_sub1_num_corner) && check(s_sub2_num_corner) && check(s_sub3_num_corner) && check(s_sub4_num_corner) && check(s_sub5_num_corner) && check(s_sub6_num_corner) && check(s_sub7_num_corner) && check(s_sub8_num_corner) && check(s_sub9_num_corner)) {
              return  Number(s_sub1_num_corner) + Number(s_sub2_num_corner) + Number(s_sub3_num_corner) + Number(s_sub4_num_corner) + Number(s_sub5_num_corner) + Number(s_sub6_num_corner) + Number(s_sub7_num_corner) + Number(s_sub8_num_corner) + Number(s_sub9_num_corner) + Number(s_sub10_num_corner);
            }else{
              return false;
            }
          }else if (num_sub_divided == '10') {
            if (check(s_sub1_num_corner) && check(s_sub2_num_corner) && check(s_sub3_num_corner) && check(s_sub4_num_corner) && check(s_sub5_num_corner) && check(s_sub6_num_corner) && check(s_sub7_num_corner) && check(s_sub8_num_corner) && check(s_sub9_num_corner) && check(s_sub10_num_corner)) {
              return  Number(s_sub1_num_corner) + Number(s_sub2_num_corner) + Number(s_sub3_num_corner) + Number(s_sub4_num_corner) + Number(s_sub5_num_corner) + Number(s_sub6_num_corner) + Number(s_sub7_num_corner) + Number(s_sub8_num_corner) + Number(s_sub9_num_corner) + Number(s_sub10_num_corner);
            }else{
              return false;
            }
          }
        }  
        
        else{
          if (check(s_total_num_corner)) {
            return  s_total_num_corner;
          }else{
            return false;
          }
          
        }
      }

  function cs_s_get_total_corner(){
        var checkBox = document.getElementById("cs_check_box");
        var num_sub_divided = document.getElementById('cs_num_sub_divided').value;
        var s_total_num_corner = document.getElementById('cs_s_total_num_corner').value;
        var s_sub1_num_corner = document.getElementById('cs_s_sub1_num_corner').value;
        var s_sub2_num_corner = document.getElementById('cs_s_sub2_num_corner').value;
        var s_sub3_num_corner = document.getElementById('cs_s_sub3_num_corner').value;
        var s_sub4_num_corner = document.getElementById('cs_s_sub4_num_corner').value;
        var s_sub5_num_corner = document.getElementById('cs_s_sub5_num_corner').value;
        var s_sub6_num_corner = document.getElementById('cs_s_sub6_num_corner').value;
        var s_sub7_num_corner = document.getElementById('cs_s_sub7_num_corner').value;
        var s_sub8_num_corner = document.getElementById('cs_s_sub8_num_corner').value;
        var s_sub9_num_corner = document.getElementById('cs_s_sub9_num_corner').value;
        var s_sub10_num_corner = document.getElementById('cs_s_sub10_num_corner').value;
        // var sub_total_corner;

        if (checkBox.checked == true){
          if (num_sub_divided == '2') {
            if (check(s_sub1_num_corner) && check(s_sub2_num_corner)) {
              return  Number(s_sub1_num_corner) + Number(s_sub2_num_corner) + Number(s_sub3_num_corner) + Number(s_sub4_num_corner) + Number(s_sub5_num_corner) + Number(s_sub6_num_corner) + Number(s_sub7_num_corner) + Number(s_sub8_num_corner) + Number(s_sub9_num_corner) + Number(s_sub10_num_corner);
            }else{
              return false;
            }
          }else if (num_sub_divided == '3') {
            if (check(s_sub1_num_corner) && check(s_sub2_num_corner) && check(s_sub3_num_corner)) {
              return  Number(s_sub1_num_corner) + Number(s_sub2_num_corner) + Number(s_sub3_num_corner) + Number(s_sub4_num_corner) + Number(s_sub5_num_corner) + Number(s_sub6_num_corner) + Number(s_sub7_num_corner) + Number(s_sub8_num_corner) + Number(s_sub9_num_corner) + Number(s_sub10_num_corner);
            }else{
              return false;
            }
          }else if (num_sub_divided == '4') {
            if (check(s_sub1_num_corner) && check(s_sub2_num_corner) && check(s_sub3_num_corner) && check(s_sub4_num_corner)) {
              return  Number(s_sub1_num_corner) + Number(s_sub2_num_corner) + Number(s_sub3_num_corner) + Number(s_sub4_num_corner) + Number(s_sub5_num_corner) + Number(s_sub6_num_corner) + Number(s_sub7_num_corner) + Number(s_sub8_num_corner) + Number(s_sub9_num_corner) + Number(s_sub10_num_corner);
            }else{
              return false;
            }
          }else if (num_sub_divided == '5') {
            if (check(s_sub1_num_corner) && check(s_sub2_num_corner) && check(s_sub3_num_corner) && check(s_sub4_num_corner) && check(s_sub5_num_corner)) {
              return  Number(s_sub1_num_corner) + Number(s_sub2_num_corner) + Number(s_sub3_num_corner) + Number(s_sub4_num_corner) + Number(s_sub5_num_corner) + Number(s_sub6_num_corner) + Number(s_sub7_num_corner) + Number(s_sub8_num_corner) + Number(s_sub9_num_corner) + Number(s_sub10_num_corner);
            }else{
              return false;
            }
          }else if (num_sub_divided == '6') {
            if (check(s_sub1_num_corner) && check(s_sub2_num_corner) && check(s_sub3_num_corner) && check(s_sub4_num_corner) && check(s_sub5_num_corner) && check(s_sub6_num_corner)) {
              return  Number(s_sub1_num_corner) + Number(s_sub2_num_corner) + Number(s_sub3_num_corner) + Number(s_sub4_num_corner) + Number(s_sub5_num_corner) + Number(s_sub6_num_corner) + Number(s_sub7_num_corner) + Number(s_sub8_num_corner) + Number(s_sub9_num_corner) + Number(s_sub10_num_corner);
            }else{
              return false;
            }
          }else if (num_sub_divided == '7') {
            if (check(s_sub1_num_corner) && check(s_sub2_num_corner) && check(s_sub3_num_corner) && check(s_sub4_num_corner) && check(s_sub5_num_corner) && check(s_sub6_num_corner) && check(s_sub7_num_corner)) {
              return  Number(s_sub1_num_corner) + Number(s_sub2_num_corner) + Number(s_sub3_num_corner) + Number(s_sub4_num_corner) + Number(s_sub5_num_corner) + Number(s_sub6_num_corner) + Number(s_sub7_num_corner) + Number(s_sub8_num_corner) + Number(s_sub9_num_corner) + Number(s_sub10_num_corner);
            }else{
              return false;
            }
          }
          else if (num_sub_divided == '8') {
            if (check(s_sub1_num_corner) && check(s_sub2_num_corner) && check(s_sub3_num_corner) && check(s_sub4_num_corner) && check(s_sub5_num_corner) && check(s_sub6_num_corner) && check(s_sub7_num_corner) && check(s_sub8_num_corner)) {
              return  Number(s_sub1_num_corner) + Number(s_sub2_num_corner) + Number(s_sub3_num_corner) + Number(s_sub4_num_corner) + Number(s_sub5_num_corner) + Number(s_sub6_num_corner) + Number(s_sub7_num_corner) + Number(s_sub8_num_corner) + Number(s_sub9_num_corner) + Number(s_sub10_num_corner);
            }else{
              return false;
            }
          }else if (num_sub_divided == '9') {
            if (check(s_sub1_num_corner) && check(s_sub2_num_corner) && check(s_sub3_num_corner) && check(s_sub4_num_corner) && check(s_sub5_num_corner) && check(s_sub6_num_corner) && check(s_sub7_num_corner) && check(s_sub8_num_corner) && check(s_sub9_num_corner)) {
              return  Number(s_sub1_num_corner) + Number(s_sub2_num_corner) + Number(s_sub3_num_corner) + Number(s_sub4_num_corner) + Number(s_sub5_num_corner) + Number(s_sub6_num_corner) + Number(s_sub7_num_corner) + Number(s_sub8_num_corner) + Number(s_sub9_num_corner) + Number(s_sub10_num_corner);
            }else{
              return false;
            }
          }else if (num_sub_divided == '10') {
            if (check(s_sub1_num_corner) && check(s_sub2_num_corner) && check(s_sub3_num_corner) && check(s_sub4_num_corner) && check(s_sub5_num_corner) && check(s_sub6_num_corner) && check(s_sub7_num_corner) && check(s_sub8_num_corner) && check(s_sub9_num_corner) && check(s_sub10_num_corner)) {
              return  Number(s_sub1_num_corner) + Number(s_sub2_num_corner) + Number(s_sub3_num_corner) + Number(s_sub4_num_corner) + Number(s_sub5_num_corner) + Number(s_sub6_num_corner) + Number(s_sub7_num_corner) + Number(s_sub8_num_corner) + Number(s_sub9_num_corner) + Number(s_sub10_num_corner);
            }else{
              return false;
            }
          }
        }  
        
        else{
          if (check(s_total_num_corner)) {
            return  s_total_num_corner;
          }else{
            return false;
          }
          
        }
      }


  function get_excess_area(val){
    if(val <= 10000){ //TARIFF
      return  0;
    }else{
      //return  Math.floor(val/10000);
      return Math.ceil((val/10000) - 1);
    }
  }

  

  function get_excess_area_price(val){ // LOT AREA PRICE
    return  val * 10000; //1,500 per Hectare
  }

  function excess_corner_compute(val){
    if (val <= 4) {
      return  0;
    }else{
      return  val - 4;
      }
  }

  function get_excess_corner_price(val){  // Corner Price
    return val * 600;//per Corner
  }

  function get_radio_val(val){
    for (var i = 0, length = val.length; i < length; i++)
        {
         if (val[i].checked)
         {
          // do whatever you want with the checked radio
          if( val[i].value == 1){ 

              return  0;
              

          }else{
              return  1;
              
          }
         }
        }
  }

  function radio_price(val){ //Survey Authority Price
      return val * 3000;
  }

  function total_sub_corner(val, sub){
      var corner = val * 4;
      
      if (corner >= sub){
        return 0;
      }
      else{
        return sub - corner;
      }

  }

  function check(val){
      if (val == '' || val == null) {
        validate.style.display = 'block';
        document.getElementById('summary_body').style.display = 'none';
        return false;
      }else{
        validate.style.display = 'none';
        document.getElementById('summary_body').style.display = 'block';
        return true;
      }
  }

  // function validate_sub(){

  // }

  function clearselects() {
        var s_sub1_num_corner = document.getElementById('s_sub1_num_corner');
        var s_sub2_num_corner = document.getElementById('s_sub2_num_corner');
        var s_sub3_num_corner = document.getElementById('s_sub3_num_corner');
        var s_sub4_num_corner = document.getElementById('s_sub4_num_corner');
        var s_sub5_num_corner = document.getElementById('s_sub5_num_corner');
        var s_sub6_num_corner = document.getElementById('s_sub6_num_corner');
        var s_sub7_num_corner = document.getElementById('s_sub7_num_corner');
        var s_sub8_num_corner = document.getElementById('s_sub8_num_corner');
        var s_sub9_num_corner = document.getElementById('s_sub9_num_corner');
        var s_sub10_num_corner = document.getElementById('s_sub10_num_corner');

        s_sub1_num_corner.selectedIndex = -1;  
        s_sub2_num_corner.selectedIndex = -1;
        s_sub3_num_corner.selectedIndex = -1;
        s_sub4_num_corner.selectedIndex = -1;
        s_sub5_num_corner.selectedIndex = -1;
        s_sub6_num_corner.selectedIndex = -1;
        s_sub7_num_corner.selectedIndex = -1;
        s_sub8_num_corner.selectedIndex = -1;
        s_sub9_num_corner.selectedIndex = -1;
        s_sub10_num_corner.selectedIndex = -1;

}

function clearselectcs(){
        var s_sub1_num_corner = document.getElementById('cs_s_sub1_num_corner');
        var s_sub2_num_corner = document.getElementById('cs_s_sub2_num_corner');
        var s_sub3_num_corner = document.getElementById('cs_s_sub3_num_corner');
        var s_sub4_num_corner = document.getElementById('cs_s_sub4_num_corner');
        var s_sub5_num_corner = document.getElementById('cs_s_sub5_num_corner');
        var s_sub6_num_corner = document.getElementById('cs_s_sub6_num_corner');
        var s_sub7_num_corner = document.getElementById('cs_s_sub7_num_corner');
        var s_sub8_num_corner = document.getElementById('cs_s_sub8_num_corner');
        var s_sub9_num_corner = document.getElementById('cs_s_sub9_num_corner');
        var s_sub10_num_corner = document.getElementById('cs_s_sub10_num_corner');
        var c_lot_1_area = document.getElementById('cs_c_lot_1_area');
        var c_lot_2_area = document.getElementById('cs_c_lot_2_area');
        var c_lot_3_area = document.getElementById('cs_c_lot_3_area');
        var c_lot_4_area = document.getElementById('cs_c_lot_4_area');
        var c_lot_5_area = document.getElementById('cs_c_lot_5_area');
        // var c_num_1_corner = document.getElementById('c_num_1_corner');
        // var c_num_2_corner = document.getElementById('c_num_2_corner');
        // var c_num_3_corner = document.getElementById('c_num_3_corner');
        // var c_num_4_corner = document.getElementById('c_num_4_corner');
        // var c_num_5_corner = document.getElementById('c_num_5_corner');

        c_lot_1_area.value = "";
        c_lot_2_area.value = "";
        c_lot_3_area.value = "";
        c_lot_4_area.value = "";
        c_lot_5_area.value = "";

        s_sub1_num_corner.selectedIndex = -1;  
        s_sub2_num_corner.selectedIndex = -1;
        s_sub3_num_corner.selectedIndex = -1;
        s_sub4_num_corner.selectedIndex = -1;
        s_sub5_num_corner.selectedIndex = -1;
        s_sub6_num_corner.selectedIndex = -1;
        s_sub7_num_corner.selectedIndex = -1;
        s_sub8_num_corner.selectedIndex = -1;
        s_sub9_num_corner.selectedIndex = -1;
        s_sub10_num_corner.selectedIndex = -1;

        // c_num_1_corner.selectedIndex = -1;
        // c_num_2_corner.selectedIndex = -1;
        // c_num_3_corner.selectedIndex = -1;
        // c_num_4_corner.selectedIndex = -1;
        // c_num_5_corner.selectedIndex = -1;


}

function clearselectc(){
        var c_lot_1_area = document.getElementById('c_lot_1_area');
        var c_lot_2_area = document.getElementById('c_lot_2_area');
        var c_lot_3_area = document.getElementById('c_lot_3_area');
        var c_lot_4_area = document.getElementById('c_lot_4_area');
        var c_lot_5_area = document.getElementById('c_lot_5_area');
        var c_num_1_corner = document.getElementById('c_num_1_corner');
        var c_num_2_corner = document.getElementById('c_num_2_corner');
        var c_num_3_corner = document.getElementById('c_num_3_corner');
        var c_num_4_corner = document.getElementById('c_num_4_corner');
        var c_num_5_corner = document.getElementById('c_num_5_corner');

        c_lot_1_area.value = "";
        c_lot_2_area.value = "";
        c_lot_3_area.value = "";
        c_lot_4_area.value = "";
        c_lot_5_area.value = "";

        c_num_1_corner.selectedIndex = -1;
        c_num_2_corner.selectedIndex = -1;
        c_num_3_corner.selectedIndex = -1;
        c_num_4_corner.selectedIndex = -1;
        c_num_5_corner.selectedIndex = -1;


}