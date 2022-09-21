let select = document.getElementById("tanker"),
    form = select.form,
    address = document.getElementById("tanker_address"),
    cc = document.getElementById("CC");

form.addEventListener("submit", (e) => {
	let email = select.value;
	form.action = "mailto:" + email + cc + bcc + subject;
	e.submit();
});

select.addEventListener('change', (event) => {
    address.textContent = select.value;
    if (select.value !== "ugyfelszolgalat@kk.gov.hu") {
        cc.style.display = "flex";
    } else {
        cc.style.display = "none";
    }
});
