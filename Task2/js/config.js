let members = data.results[0].members
const tbody = document.querySelector("tbody")
members.forEach(member  =>{
let row = tbody.insertRow(-1);
    row.innerHTML='<td>'+member.first_name+" "+nullstring(member.middle_name)+" "+member.last_name+'</td>'
    row.innerHTML+='<td>'+member.party+'</td>'
    row.innerHTML+='<td>'+member.state+'</td>'
    row.innerHTML+='<td>'+member.seniority+'</td>'
    row.innerHTML+='<td>'+"%"+member.votes_with_party_pct+'</td>'

})
function nullstring(string){
    if(string==null){
       return ""
    }
    else{
       return string
    }
    
}
