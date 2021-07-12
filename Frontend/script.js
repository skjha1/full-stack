'use strict'

const add_button = document.querySelector(".add_button");
const delete_btn = document.querySelector('.delete_btn');
const overlay = document.querySelector('.overlay');
const delete_inv = document.querySelector('.delete_inv');
const add_inv = document.querySelector('.add_inv');
const edit_inv = document.querySelector('.edit_inv');
const edit_btn = document.querySelector('.edit_btn');


add_button.addEventListener('click', function ()
{
    add_inv.classList.remove("hidden");
    overlay.classList.remove("hidden");

    document.querySelector('#add_cancel').addEventListener("click", function ()
    {
        add_inv.classList.add("hidden");
        overlay.classList.add("hidden");
    })
    document.querySelector('#add-cross').addEventListener("click", function ()
    {
        add_inv.classList.add("hidden");
        overlay.classList.add("hidden");
    })

})
// Delete button functionality

delete_btn.addEventListener("click", function ()
{
    console.log("button clicked")
    delete_inv.classList.remove("hidden");
    overlay.classList.remove("hidden");

    document.querySelector('#delete_cancel').addEventListener("click", function ()
    {
        delete_inv.classList.add("hidden");
        overlay.classList.add("hidden");
    })

    document.querySelector('#delete_cross').addEventListener("click", function ()
    {
        delete_inv.classList.add("hidden");
        overlay.classList.add("hidden");
    })
})

// edit button functionality

edit_btn.addEventListener("click", function ()
{
    console.log("button clicked")
    edit_inv.classList.remove("hidden");
    overlay.classList.remove("hidden");

    document.querySelector('.close_btn_3').addEventListener("click", function ()
    {
        edit_inv.classList.add("hidden");
        overlay.classList.add("hidden");
    })

    document.querySelector('#edit_cross').addEventListener("click", function ()
    {
        edit_inv.classList.add("hidden");
        overlay.classList.add("hidden");
    })
})

// Fetch Row id of the checkbox 

function check_row_id()
{
    var  checkboxes = document.getElementsByName('select');
    let selected= [];
    for(let i=0; i< checkboxes.length;i++)
    {
        if(checkboxes[i].checked)
         
        selected.push(i);
    }
    return selected;
}




function get_req(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false);
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

var table_data = JSON.parse(get_req("https://aniketroy03.github.io/json-testing/invoice.json"));


function buildtable(data)
{
    var table = $('#table_data_1');
    table.empty();
    var max_size = data.length;
    var sta = 1;
    var elements_per_page = 10;
    var limit = elements_per_page;
    goFun(sta, limit);
    function goFun(sta, limit)
    {
        for (var i = sta; i < limit; i++)
        {
            var tab = `<tr id = ${String(i)}>
                            <td><input type="checkbox" class = "checkbox" name="select" onclick = "highlight(${String(i)});"></td>
                            <td>${data[i]["name_customer"]}</td>
                            <td>${data[i]["cust_number"]}</td>
                            <td>${data[i]["invoice_id"]}</td>
                            <td>${data[i]["total_open_amout"]}</td>
                            <td>${data[i]["due_in_date"]}</td>
                            <td>${data[i]["predicted_date"]}</td>
                            <td>${data[i]["notes"]}</td>
                        </tr>`
            
                        $('#table_data_1').append(tab)
        }
    }
    $('#page-right').click(function ()
    {
        var next = limit;
        if (max_size >= next)
        {
            let def = limit + elements_per_page;
            limit = def
            table.empty();
            if (limit > max_size)
            {
                def = max_size;
            }
            goFun(next, def);
        }
    });
    $('#page-left').click(function ()
    {
        var pre = limit - (2 * elements_per_page);
        if (pre >= 0)
        {
            limit = limit - elements_per_page;
            table.empty();
            goFun(pre, limit);
        }
    });
}

buildtable(table_data);





