import "./bio-link-mixin.js";
/**
 * `bio-link-chiclet` This variant of a biolink is used to render the links in a chiclet (a small widget).
    The chiclet can be placed in trays and grouped together.

    Example:

				<bio-link-chiclet id="1234" type="entrezgene" text="whatever"></bio-link-chicklet>

 *
 * @summary ShortDescription.
 * @customElement
 * @polymer
 * @extends {Polymer.Element}
 */
class BioLinkChiclet extends BioLinkMixin(Polymer.Element) {
  /**
   * String providing the tag name to register the element under.
   */
  static get is() {
    return "bio-link-chiclet";
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
   * Use for one-time configuration of your component after local DOM is initialized.
   */
  ready() {
    super.ready();

    Polymer.RenderStatus.afterNextRender(this, function() {});
  }
}

window.customElements.define(BioLinkChiclet.is, BioLinkChiclet);
