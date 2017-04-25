var view = {
		display: function (data) {
			// create new data view to be displayed
			var elem, text, i;
			this.clear();
			table = document.createElement("table");
			tr1 = document.createElement("tr");
			th1 = document.createElement("th");
			text1 = document.createTextNode(
						"Code"
						);
			th1.appendChild(text1);
			th2 = document.createElement("th");
			text2 = document.createTextNode(
						"Name"
						);
			th2.appendChild(text2);
			th3 = document.createElement("th");
			text3 = document.createTextNode(
						"Rate"
						);
			th3.appendChild(text3);
			table.appendChild(tr1);
			tr1.appendChild(th1);
			tr1.appendChild(th2);
			tr1.appendChild(th3);
			for (i = 0; i < data.length; i++) {
				
				tr = document.createElement("tr");
				td1 = document.createElement("td");
				td2 = document.createElement("td");
				td3 = document.createElement("td");
				textCode = document.createTextNode(
						data[i].code
						);
				textName = document.createTextNode(
						data[i].name
						);
				textRate = document.createTextNode(
						data[i].rate
						);
				td1.appendChild(textCode);
				td2.appendChild(textName);
				td3.appendChild(textRate);
				tr.appendChild(td1);
				tr.appendChild(td2);
				tr.appendChild(td3);
				table.appendChild(tr);
			
				
				/* elem = document.createElement("h3");
				text = document.createTextNode(
						data[i].code + "/" + data[i].name + " " + data[i].rate
						);
				elem.appendChild(text); */
				document.getElementById('dataview').appendChild(table);
			}
		},
		clear: function () {
			// remove old data
			var dataView = document.getElementById('dataview');
			while (dataView.firstChild) {
				dataView.removeChild(dataView.firstChild);
			}
		},
		addCurrency: function () {
			var currency = {
					code: document.getElementById('code').value,
					rate: document.getElementById('rate').value,
					name: document.getElementById('name').value
			}
			controller.storeCurrency(currency);
		}
	};
