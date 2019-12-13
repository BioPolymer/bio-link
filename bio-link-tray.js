import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import "@polymer/iron-flex-layout/iron-flex-layout";
import "./bio-link-chiclet";

/**
 * `BioLinkTray`
 *
 * @customElement
 * @polymer
 * @demo
 *
 */
class BioLinkTray extends PolymerElement {
  static get properties() {
    return {
      /** The title of the tray. */
      label: {
        type: String,
        value: ""
      },

      /** The type of database for the links. */
      type: {
        type: String,
        value: ""
      },

      /** 
        * An array of link objects 
        * @type {{
                id: String - the ID of the object,
                text: String - the label text of the object
        }}
        */
      model: {
        type: Array,
        value: []
      }
    };
  }

  static get template() {
    return html`
      <style>
        :host {
          display: block;
          --bio-link-tray-label-color: #909090;
          --bio-link-tray-font-size: 0.8em;
          --bio-link-label-font-family: "Roboto";
        }
        .link-tray {
          @apply --layout-horizontal;
          @apply --layout-wrap;
        }
        label {
          color: var(--bio-link-tray-label-color);
          font-size: var(--bio-link-tray-font-size);
          font-family: var(--bio-link-label-font-family);
        }
      </style>
      <label>[[label]]</label>
      <div class="link-tray">
        <template is="dom-repeat" items="[[model]]" as="link">
          <bio-link-chiclet
            id="[[link.id]]"
            type="[[type]]"
            label="[[link.text]]"
          ></bio-link-chiclet>
        </template>
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

  /**
   * Use for one-time configuration of your component after local
   * DOM is initialized.
   */
  ready() {
    super.ready();
  }
}

customElements.define("bio-link-tray", BioLinkTray);
