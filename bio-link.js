/**
 * `bio-link` This component is responsible for handling linking out
    Example:

				<bio-link id="1234" type="entrez-gene" use-new-window="true"></bio-link>

    Example:

				<bio-link id="1234" type="entrez-gene" use-new-window="true"></bio-link>

 *
 * @summary ShortDescription.
 * @customElement
 * @polymer
 * @extends {Polymer.Element}
 */
class BioLink extends BioLinkMixin(Polymer.Element) {
  /**
   * String providing the tag name to register the element under.
   */
  static get is() {
    return "bio-link";
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

window.customElements.define(BioLink.is, BioLink);
