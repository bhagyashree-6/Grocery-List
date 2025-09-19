  
// मराठी युनिट्स
const units = ["किलो", "ग्रॅम", "लिटर", "तोळा", "नग", "पाकीट"];

// कॅटेगरीज व आयटम्स
const categories = {

  "डाळी / कडधान्य": [
    "तूर डाळ",
    "मूग डाळ",
    "मसूर डाळ",
    "चना डाळ",
    "उडीद डाळ",
    "हिरवे मूग",
    "मटकी (गावराण)",
    "चणे",
    "काबुली चणे",
    "चवळी",
    "सफेद वाटाणे",
    "काळे वाटाणे (गोटे गावचे)",
    "साबुदाणा",
    "शेंगदाणे",
    "सोयाबीन वडी",
    "कुळीथ",
    "राजमा"
  ],
  "धान्य व पीठ": [
    "तांदूळ (सुरती कोलम)",
    "तांदूळ (बासमती)",
    "इडली तांदूळ",
    "गहू",
    "ज्वारी",
    "बाजरी",
    "नाचणी",
    "पोहे",
    "रवा",
    "मैदा",
    "तांदळाची मोदक पिठी",
    "बेसन",
    "साखर",
    "गूळ",
    "चहा पाऊडर",
    "कॉफी",
    "ओट्स"
  ],
  "मसाले व सुकी सामग्री": [
    "मीठ",
    "हळद पावडर",
    "काश्मिरी मिरची पावडर",
    "हिंग",
    "जिरे",
    "मोहरी",
    "मेथीदाणे",
    "धणे",
    "हिरवी वेलची",
    "बडीशेप",
    "लवंग",
    "दालचिनी",
    "तेजपत्ता",
    "शाही जिर",
    "मसाला वेलची",
    "दगडफूल",
    "चक्रीफूल",
    "धणा पावडर",
    "चाट मसाला",
    "किचन किंग मसाला",
    "सांबार मसाला",
    "बिर्याणी मसाला",
    "चिकन मसाला",
    "पावभाजी मसाला",
    "छोले मसाला",
    "तंदुरी मसाला"
  ],

  "तेल व तूप": [
    "फॉर्च्यून राइस ब्रान तेल",
    "मोहरी तेल",
    "तूप",
    "मध"
  ],
 "ड्रायफ्रुट्स": [
    "काजू",
    "बदाम",
    "अक्रोड",
    "खजूर",
    "पिस्ते",
    "मनुके",
    "काळे मनुके",
    "आवळा कॅन्डी",
    "केसर",
    "मसाला दूध पाऊडर (एवरेस्ट)"
  ],
  "बिसकिट / स्नॅक्स": [
    "पार्ले",
    "मारी गोल्ड",
    "वीट मारी",
    "क्रॅक जॅक",
    "नाइस",
    "ओरिओ",
    "न्यूट्रीचॉईस",
    "मोनॅको",
    "भाजलेले चणे",
    "भाजलेले शेंगदाणे",
    "चकली तुकडा",
    "बटाटा सळी",
    "बटाटा चिवडा",
    "फरसाण",
    "नायलॉन शेव"
  ],
  "सॉसेस / चटणी": [
    "टोमॅटो केचप",
    "शेजवान चटणी",
    "मयोनीज",
    "चिली फ्लेक्स",
    "ऑरीगॅनो",
    "चिली सॉस",
    "विनेगर",
    "लिक्विड फूड कलर",
    "वनीला एसेंस"
  ],
  "बेकरीचे पदार्थ": [
    "टोस्ट",
    "खारी",
    "जीरा बटर",
    "लादी पाव",
    "ब्रेड",
    "नानकटाई",
    "कप केक"
  ],
    "फ्रीज मधले पदार्थ": [
    "दूध",
    "दही",
    "ताक",
    "पनीर",
    "चीज (मोझारेला, चेडर, फेटा)",
    "आईस्क्रीम",
    "सरबत"
  ],
  "पूजेचे साहित्य": [
    "अगरबत्ती",
    "कापूर वडी",
    "धूप",
    "दिव्याच तेल",
    "दिव्याच तूप",
    "शेणी",
    "अष्टगंध",
    "माचिस बॉक्स",
    "कापसाच्या लांब वाती",
    "कापूस",
    "गोमूत्र",
    "हळद पाऊडर",
    "कुंकू पाऊडर",
    "अभीर पाऊडर",
    "गुलाल पाऊडर",
    "अत्तर",
    "आसन कपडा",
    "भिमासेनी कापुर",
    "गुगल धूप",
    "सुपारी",
    "करंडा-फणी"
  ],
 
  "स्वच्छता साहित्य": [
    "संतूर साबण",
    "मेडीमिक्स साबण",
    "सिन्थॅल साबण",
    "क्लिनिकप्लस शैम्पू",
    "सर्फएक्सेल ईझी वॉश पाऊडर",
    "सर्फएक्सेल क्विक वॉश पाऊडर",
    "सर्फएक्सेल बार",
    "कम्फर्ट लिक्विड",
    "हार्पिक टॉयलेट",
    "हार्पिक बाथरूम",
    "लायझोल फ्लोर क्लीनर",
    "आला फॅब्रिक क्लीनर",
    "वॅनिश पाऊडर",
    "विम लिक्विड",
    "विम बार",
    "स्कॉच ब्राईट स्क्रब",
    "तारेचा काथा",
    "नायलॉन काथा",
    "टूथपेस्ट",
    "टुथब्रश",
    "रेझर",
    "ब्लेड",
    "शेविंग क्रीम",
    "मेन्स फेसवॉश",
    "लेडिज फेसवॉश",
    "नॅपथलिन बॉल्स (डांबर गोळी)",
    "ओडोनिल रूम फ्रेशनेर",
    "हार्पिक ड्राईन क्लीनर",
    "वॉशिंगमशीन क्लीनर",
    "झाडू",
    "बाथरूम ब्रश",
    "बाथरूम झाडू",
    "टिश्यू पेपर",
    "पेपर फॉईल"
  ]  
    };
let groceries = JSON.parse(localStorage.getItem("groceries")) || {};

function renderLists() {
  const container = document.getElementById("lists");
  //

  for (let category in categories) {
    container.innerHTML += `<h2># ${category}</h2>`;
    let table = `<table><thead><tr><th>आयटम</th><th>प्रमाण</th><th>मापन</th></tr></thead><tbody>`;

    categories[category].forEach(item => {
      const entry = (groceries[category] && groceries[category][item]) || { qty: "", unit: "" };
      let options = units.map(u =>
        `<option value="${u}" ${entry.unit === u ? "selected" : ""}>${u}</option>`
      ).join("");

      table += `
        <tr>
        <td>${item}</td>
          <td><input type="number" min="1" value="${entry.qty}"onchange="updateQuantity('${category}','${item}', this.value)" /></td>
          <td>
            <select onchange="updateUnit('${category}','${item}', this.value)">
              <option value=""> </option>
              ${options}
            </select>
          </td>
        </tr>`;
    });

    table += `</tbody></table>`;
    container.innerHTML += table;
  }
}

function refreshList() {
  if (confirm("नक्की ? आधीची संपूर्ण लिस्ट मिटवली जाईल.")) {
    localStorage.removeItem("groceries"); // clear storage
    groceries = {}; // reset variable
    renderLists();  // reload fresh list
    document.getElementById("summary").innerHTML = ""; // summary साफ
  }
}

    function updateQuantity(category, item, qty) {
  if (qty < 1) {
    alert("⚠️ प्रमाण शून्य किंवा निगेटिव्ह असू शकत नाही.");
    return;
  }
  if (!groceries[category]) groceries[category] = {};
  groceries[category][item] = groceries[category][item] || { qty: "", unit: "" };
  groceries[category][item].qty = qty;
  localStorage.setItem("groceries", JSON.stringify(groceries));
}

    function updateUnit(category, item, unit) {
      if (!groceries[category]) groceries[category] = {};
      groceries[category][item] = groceries[category][item] || { qty: "", unit: "" };
      groceries[category][item].unit = unit;
      localStorage.setItem("groceries", JSON.stringify(groceries));
    }

    // Build summary only with entered values
    function buildSummary() {
  const summary = document.getElementById("summary");
  summary.innerHTML = ""; // सुरुवातीला साफ करा

  let hasError = false;
  // let finalHTML = "<h1>🛒 किराणा सामानाची यादी</h1>";
const today = new Date();
const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
const formattedDate = today.toLocaleDateString("mr-IN", options);

let finalHTML = `<h1>🛒 किराणा सामानाची यादी</h1>
<p style="font-size:18px; color:grey;">📅 यादी तयार झाल्याची तारीख: ${formattedDate}</p>`;

  for (let category in categories) {
    let itemsAdded = false;
    let listHTML = `<h2>${category}</h2><ul>`;

    categories[category].forEach(item => {
      const entry = groceries[category] && groceries[category][item];

      // input आणि select elements शोधा
      const qtyInput = document.querySelector(
        `input[onchange="updateQuantity('${category}','${item}', this.value)"]`
      );
      const unitSelect = document.querySelector(
        `select[onchange="updateUnit('${category}','${item}', this.value)"]`
      );

      // जुन्या error classes काढून टाका
      if (qtyInput) qtyInput.classList.remove("error");
      if (unitSelect) unitSelect.classList.remove("error");

      if (entry && (entry.qty || entry.unit)) {
        if (!entry.qty) {
          if (qtyInput) qtyInput.classList.add("error");
          hasError = true;
        }
        if (!entry.unit) {
          if (unitSelect) unitSelect.classList.add("error");
          hasError = true;
        }

        if (entry.qty && entry.unit) {
          listHTML += `<li>${item} : ${entry.qty} ${entry.unit}</li>`;
          itemsAdded = true;
        }
      }
    });

    listHTML += "</ul>";
    if (itemsAdded) finalHTML += listHTML;
  }

  // जर एरर असेल तर summary अजिबात तयार करू नये
  if (hasError) {
    summary.innerHTML = ""; 
    return false;
  }

summary.innerHTML = `<div style="text-align:center; font-family: 'Arial', 'Mukta', sans-serif;">${finalHTML}</div>`;
  return true;
}
    // Save only values as Image
function saveImage() {
  if (!buildSummary()) {
    alert("⚠️ कृपया लाल झालेल्या रिकाम्या जागी योग्य प्रमाण / मापन भरा.");
    return; // stop if any field is missing
  }

  const summaryDiv = document.getElementById("summary");
  summaryDiv.style.display = "block";

  html2canvas(summaryDiv, { scale: 2 }).then(canvas => {
    const link = document.createElement("a");
    link.download = "grocery-list.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
    summaryDiv.style.display = "none";
  });
}


    renderLists();
