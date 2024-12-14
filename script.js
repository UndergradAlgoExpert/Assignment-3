async function getData() {
  //end point url
  const url = "https://data.gov.bh/api/explore/v2.1/catalog/datasets/01-statistics-of-students-nationalities_updated/records?where=colleges%20like%20%22IT%22%20AND%20the_programs%20like%20%22bachelor%22&limit=100";
  const response = await fetch(url) //fetch data
  const result = await response.json() //turn response into json
  const resultArr = result.results; //get the array part of the result
  const node = document.getElementById("targetNode") //get the target tbody element by ID
  for (let i = 0; i < resultArr.length; i++) {
    const row = document.createElement("tr") //initalize table row
    node.appendChild(row) //append row into target node
    //initalize table data
    const year = document.createElement("td")
    const semester = document.createElement("td")
    const the_programs = document.createElement("td")
    const nationality = document.createElement("td")
    const colleges = document.createElement("td")
    const number_of_students = document.createElement("td")
    //have table data content be fetch result data
    year.innerHTML = resultArr[i].year
    semester.innerHTML = resultArr[i].semester
    the_programs.innerHTML = resultArr[i].the_programs
    nationality.innerHTML = resultArr[i].nationality
    colleges.innerHTML = resultArr[i].colleges
    number_of_students.innerHTML = resultArr[i].number_of_students
    //append all table data nodes into parent table row node
    row.appendChild(year)
    row.appendChild(semester)
    row.appendChild(the_programs)
    row.appendChild(nationality)
    row.appendChild(colleges)
    row.appendChild(number_of_students)
  }
}

getData(); //script entry point