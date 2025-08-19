# CIC Web Map Service – Demo

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Online-brightgreen)](https://djajeri.github.io/CIC-WEB-MAP---DEMO/)

This repository hosts the **CIC Web Map Service Demo**, developed using **QGIS** with the **qgis2web plugin**.  
It provides an interactive web map to visualize CIC project geospatial data on the web.

---

## 🌍 Live Access
You can access the deployed web map here:  
👉 **[CIC Web Map – Demo](https://djajeri.github.io/CIC-WEB-MAP---DEMO/)**

---

## ⚙️ Technical Overview
- **GIS Platform**: [QGIS](https://qgis.org)  
- **Export Tool**: [qgis2web](https://github.com/tomchadwin/qgis2web)  
- **Frameworks**: OpenLayers
- **Deployment**: [GitHub Pages](https://pages.github.com/)  
- **Data Format**: GeoJSON, HTML, CSS, JavaScript  

---

## 📂 Repository Structure
├── index.html # Main entry point of the web map
├── data/ # Exported GeoJSON layers
├── css/ # Stylesheets
├── js/ # JavaScript libraries and configs
└── images/ # Supporting images/icons


---

## 🚀 Deployment Workflow
1. Prepare GIS layers in **QGIS**.  
2. Export using **qgis2web** (ensure relative paths).  
3. Upload the exported files to this repository.  
4. Enable **GitHub Pages** on the `main` branch.  
5. Access the site at `https://<username>.github.io/<repository>/`.

---

## 🛠 Usage / Update Instructions
To update or add new layers to the CIC Web Map:

1. **Update data in QGIS**  
   - Load new spatial datasets (vector or raster).  
   - Style layers as required (symbology, labels, pop-ups).  

2. **Re-export with qgis2web**  
   - Go to `Web ▸ qgis2web ▸ Export`.  
   - Select **Leaflet** or **OpenLayers** output.  
   - Ensure **Export to folder** with **relative paths** enabled.  

3. **Replace files in repository**  
   - Copy all exported files (index.html, data/, css/, js/, images/) into your local repo folder.  
   - Overwrite old versions.  

4. **Commit and push changes**  
   ```bash
   git add .
   git commit -m "Update web map layers"
   git push origin main

---

## 📖 References
- [QGIS Documentation](https://docs.qgis.org)  
- [qgis2web Plugin](https://plugins.qgis.org/plugins/qgis2web/)  
- [Leaflet](https://leafletjs.com/) | [OpenLayers](https://openlayers.org/)  

---

## 👤 Author
Developed by **CIC Team**  
Deployed and maintained by **Brian Dika (djajeri)**  
