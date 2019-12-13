import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
{
  /* <script src="./URLBuilder.js"></script>
<script src="./DataImporter.js"></script> */
}
/**
 * `BioDataImporterMixin` his mixin provides a simple way of importing data into another class. The importData method
 * creates a thenable which can be chained together with parsing and persisting logic, like this
 * @example
 *  <code>
 *  this.importData('pubmed', pmid)
 *  .then(json => {console.log(json)}) // convert the response into something suitable for persistence
 *  .then(json => {// persist it})
 *  .catch(error => {console.log(error)});
 * </code>
 *
 * @customElement
 * @polymer
 * @demo
 *
 */
const BioDataImporterMixin = superclass =>
  class extends superclass {
    /**
     * Instance of the element is created/upgraded. Use: initializing state,
     * set up event listeners, create shadow dom.
     * @constructor
     */
    constructor() {
      super();
    }

    /**
     * Use for one-time configuration of your component after local
     * DOM is initialized.
     */
    ready() {
      super.ready();
    }

    importData(databaseName, id) {
      let importer = new DataImporter();
      return importer.importJsonData(databaseName, id);
    }
  };

customElements.define("bio-data-importer-mixin", BioDataImporterMixin);
