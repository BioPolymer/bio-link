import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import "@polymer/paper-input/paper-input";
import "@polymer/iron-icon/iron-icon";
import "@polymer/iron-flex-layout/iron-flex-layout";
import "@biopolymer-elements/bio-icons/bio-icons";
import "./bio-link-mixin";

/**
 * `bio-link-fld` Description
 *
 * @customElement
 * @polymer
 * @demo
 *
 */
class BioLinkFld extends PolymerElement {
  static get properties() {
    return {
      /** A flag that indicates whether or not the field is editable. */
      readonly: {
        type: Boolean,
        value: true
      },

      /** The text of the label for the field. */
      label: {
        type: String,
        value: ""
      }
    };
  }

  static get template() {
    return html`
      <style>
        :host {
          display: block;
          --bio-link-label-color: #505050;
          --bio-link-icon-color: #909090;
        }
        div {
          @apply --layout-horizontal;
        }
        iron-icon {
          --iron-icon-height: 20px;
          --iron-icon-width: 20px;
          color: var(--bio-link-icon-color);
          margin-right: 3px;
        }
        paper-input {
          @apply --layout-flex;
          --paper-input-container-color: var(--bio-link-label-color);
        }
      </style>
      <div>
        <paper-input label="[[label]]" readonly="[[readonly]]" value="{{id}}">
          <iron-icon
            icon="bio:launch"
            slot="prefix"
            on-click="_handleTap"
          ></iron-icon>
        </paper-input>
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

customElements.define("bio-link-fld", BioLinkFld);
