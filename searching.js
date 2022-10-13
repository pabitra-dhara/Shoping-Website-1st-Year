function openpage() {
    var x = document.getElementById("sarching").value;

    if (x === "redmi note 10s")
    {
        window.location.href=("file:///D:/practice/2nd%20Sem%20Project/Quick%20Shop/redmi%20details/redmi-serics.html");
    }

    if (x === "poco m2 pro") {
        window.location.href=("file:///D:/practice/2nd%20Sem%20Project/Quick%20Shop/poco/poco-m2-series.html");
    }
    if (x === "laptop"){
        window.location.href="file:///D:/practice/2nd%20Sem%20Project/Quick%20Shop/laptop/all-laptop.html"; 
    }
	if (x === "phone"){
	window.location.href = "file:///D:/practice/2nd%20Sem%20Project/Quick%20Shop/phone/phone-page.html";
	}
    if(x === "tablet"){
        window.location.href = "file:///D:/practice/2nd%20Sem%20Project/Quick%20Shop/tablet/tabletmenpage.html";
    }
    if(x === "watch"){
        window.location.href = "file:///D:/practice/2nd%20Sem%20Project/Quick%20Shop/women%20watch/women%20watch/wowatch.html";
    }
	if(x ==="tv"){
	window.location.href = "file:///C:/Users/user/Downloads/quick%20shop%20(2)/quick%20shop/television.html";
	}
    else{
        window.location.href ="file:///D:/practice/2nd%20Sem%20Project/Quick%20Shop/notFoundPage.html";
    }
}