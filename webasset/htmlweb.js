function postData(url, data) {
  // Default options are marked with *
  return fetch(url, {
    body: JSON.stringify(data), //must match 'Content-Type' header
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, same-origin, *omit
    headers: {
      "user-agent": "Example",
      "content-type": "application/json",
    },
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer", // *client, no-referrer
  }).then((response) => response.json()); // 輸入成 json
}

function submit() {
  const startdt = document.getElementById("startdt").value;
  const endtdt = document.getElementById("endtdt").value;
  const search = document.getElementById("search").value;
  const search1 = document.getElementById("search1").value;
  const search2 = document.getElementById("search2").value;
  const search3 = document.getElementById("search3").value;
  const search4 = document.getElementById("search4").value;
  const search5 = document.getElementById("search5").value;
  const search6 = document.getElementById("search6").value;
  const search7 = document.getElementById("search7").value;
  const search8 = document.getElementById("search8").value;
  const search9 = document.getElementById("search9").value;

  const input1 = document.getElementById("input1").value;
  const input2 = document.getElementById("input2").value;
  const input3 = document.getElementById("input3").value;
  const input4 = document.getElementById("input4").value;
  const input5 = document.getElementById("input5").value;
  const input6 = document.getElementById("input6").value;
  const input7 = document.getElementById("input7").value;
  const input8 = document.getElementById("input8").value;
  const input9 = document.getElementById("input9").value;

  const data = {
    startdt,
    endtdt,
    search,
    search1,
    search2,
    search3,
    search4,
    search5,
    search6,
    search7,
    search8,
    search9,
    input1,
    input2,
    input3,
    input4,
    input5,
    input6,
    input7,
    input8,
    input9,
  };

  // "/" python API >> postData "/"
  postData("/", data).then((data) => {
    const result = data.result;
    console.log(data);
    console.log(result);
    console.log(predictType(result));
  });
}
