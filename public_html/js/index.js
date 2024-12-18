var jpdbBaseURL='http://api.login2explore.com:5577';
var jpdbIRL='/api/irl';
var jpdbIML='/api/iml';
var StudentDB='STUDENT-TABLE';
var StudentRelationName='COLLEGE_DB';
var connToken='90934370|-31949228292323647|90957113';

$('#stdId').focus();

function saveRecNo2LS(jsonObj){
    var lvData=JSON.parse(jsonObj.data);
    localStorage.setItem('recno',lvData.rec_no);

}

function getStdIdAsJsonObj(){
    var stdId=$("#stdId").val();
    var jsonStr={
        id:stdId
    }
    return JSON.stringify(jsonStr);
}



function fillData(jsonObj){
    saveRecNo2LS(jsonObj);
    var data=JSON.parse(jsonObj.data).record;
    $('#stdName').val(data.name);
    $('#stdClass').val(data.class);
    $('#dob').val(data.DOB);
    $('#adr').val(data.address);
    $('#enroll').val(data.enrollment);
}

function resetForm(){
    $('#stdId').val("");
    $('#stdName').val("");
    $('#stdClass').val("");
    $('#dob').val("");
    $('#adr').val("");
    $('#enroll').val("");
    $('#stdId').prop("disabled",false);
    $('#save').prop("disabled",true);
    $('#change').prop("disabled",true);
    $('#reset').prop("disabled",true);
    $('#stdId').focus();
    
}

function validateData(){
    var stdId, stdName, stdClass, dob,adr, enroll;
    stdId = $('#stdId').val();
    stdName = $('#stdName').val();
    stdClass = $('#stdClass').val();
    dob = $('#dob').val();
    adr = $('#adr').val();
    enroll = $('#enroll').val();
    

   if(stdId===''){
    alert("Student Id Missing");
    $('#stdId').focus();
    return "";
   }

   if(stdName===''){
    alert("Student Name is Missing");
    $('#stdName').focus();
    return "";
   }

   if(stdClass===''){
    alert("Student class is Missing");
    $('#stdClass').focus();
    return "";
   }

   if(dob===''){
    alert("Date of Birth is Missing");
    $('#dob').focus();
    return "";
   }

   if(adr===''){
    alert("Address is Missing");
    $('#adr').focus();
    return "";
   }

   if(enroll===''){
    alert("Enrollment Date is Missing");
    $('#enroll').focus();
    return "";
   }

   var jsonStrObj={
    id: stdId,
  name: stdName,
  class: stdClass,
  DOB: dob,
  address: adr,
  enrollment: enroll
   }

   return JSON.stringify(jsonStrObj);


}
function getStd(){
    var stdIdJsonObj=getStdIdAsJsonObj();
    var getRequest=createGET_BY_KEYRequest(connToken,StudentDB,StudentRelationName,stdIdJsonObj);
    jQuery.ajaxSetup({async:false});
    var resJsonObj=executeCommandAtGivenBaseUrl(getRequest,jpdbBaseURL,jpdbIRL);
    jQuery.ajaxSetup({async:true});
    if(resJsonObj.status===400){
        $('#save').prop("disabled",false);
        $('#reset').prop("disabled",false);
        $("#stdName").focus();
    }else if(resJsonObj.status===200){
        $("#stdId").prop("disabled",true);
        fillData(resJsonObj);
        $('#change').prop("disabled",false);
        $('#reset').prop("disabled",false);
        $("#stdName").focus();

    }
}





function saveData(){
    var jsonStrObj=validateData();
    if(jsonStrObj===""){
        return "";
    }

    var putRequest=createPUTRequest(connToken,jsonStrObj,StudentDB, StudentRelationName);
    jQuery.ajaxSetup({async:false});
    var resJsonObj=executeCommandAtGivenBaseUrl(putRequest,jpdbBaseURL,jpdbIML);
    jQuery.ajaxSetup({async:true});
    resetForm();
    $('#stdId').focus();
}

function changeData(){
    $("#change").prop("disabled",true);
    var jsonChg=validateData();
    var updateRequest=createUPDATERecordRequest(connToken,jsonChg,StudentDB,StudentRelationName,localStorage.getItem('recno'));
    jQuery.ajaxSetup({async:false});
    var resJsonObj=executeCommandAtGivenBaseUrl(updateRequest,jpdbBaseURL,jpdbIML);
    jQuery.ajaxSetup({async:true});
    console.log(resJsonObj);
    resetForm();
    $("stdId").focus();
}