import { LitElement, html } from "lit-element";
import { BioLinkMixin } from "./bio-link-mixin.js";
import "@polymer/iron-icon/iron-icon";

{
  /* <link rel="import" href="/bower_components/iron-icon/iron-icon.html">
<link rel="import" href="../bio-icons/bio-icons.html"> */
}

/**
 * `bio-link-text` This component displays PubMed link
 * 
 * Example:

		<bio-link-text id="1234" type="pubmed" label="PMID"></bio-link-text>
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class BioLinkText extends BioLinkMixin(LitElement) {
  static get properties() {
    return {
      /** The label to be displayed. */
      label: {
        type: String,
        value: "PMID:"
      }
    };
  }

  /**
   * Implement to describe the element's DOM using lit-html.
   * Use the element current props to return a lit-html template result
   * to render into the element.
   */
  _render() {
    return html`
      <style>
        :host {
          display: block;
        }
        div {
          @apply --layout-horizontal;
        }
        label {
          color: #909090;
        }
        iron-icon {
          margin-left: 10px;
        }
      </style>
      <div>
        <label>[[label]]</label><span>[[id]]</span
        ><iron-icon icon="bio:launch" on-click="_handleTap"></iron-icon>
      </div>
    `;
  }

  /**
   * Instance of the element is created/upgraded. Use: initializing state,
   * set up event listeners, create shadow dom.
   * @constructor
   */
  constructor() {
    super();
  }
}

customElements.define("bio-link-text", BioLinkText);
