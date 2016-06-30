generateRandomColor = () => {
	return '#' + (Math.random().toString(16) + "000000").substring(2,8);
}

// stepperInput
modifyValue = (val) => {
    const inputValue = document.querySelector('input').value;
    let newValue = parseInt(inputValue, 10) + val;
    
    document.querySelector('input').value = newValue;
    return newValue;
};

// tabs
tabSelected = (event) => {
	let tab = document.getElementsByClassName('is-tab-selected');
	let tabArr = [].slice.call(tab);

	tabArr.map(p => {
		p.classList.remove('is-tab-selected');
	})
	event.target.className += ' is-tab-selected';
};

// siteHeader
headerSelected = (event) => {
	let header = document.getElementsByClassName('is-site-header-item-selected');
	let headerArr = [].slice.call(header);

	headerArr.map(h => {
		h.classList.remove('is-site-header-item-selected');
	})

	event.target.className += ' is-site-header-item-selected';
}

// formFooter
saveForm = (event) => {
	document.getElementById('formFooterProgress').style.display='block';
	return false;
}

resetForm = (event) => {
	document.getElementById('formFooterProgress').style.display='none';
	return false;
}

// sideBar
sideBarSelected = (event) => {
	let sidebar = document.getElementsByClassName('is-side-bar-item-selected');
	let sidebarArr = [].slice.call(sidebar);

	sidebarArr.map(s => {
		s.classList.remove('is-side-bar-item-selected');
	})

	event.target.className += ' is-side-bar-item-selected';
}

changeTheme = () => {
	document.getElementById('sideBar').style.background=generateRandomColor();
}



