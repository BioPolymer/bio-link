/**
 * This behavior contains attributes and methods needed to drive a bio-link. A bio-link object
 * is a component capable of linking out to
 * @polymerMixin
 * @mixinFunction
 */
export const BioLinkMixin = superclass =>
  class extends superclass {
    static get properties() {
      return {
        /** The database ID of the entity you are linking to.  Either a gene id or protein id, pubmed id, etc) */
        id: {
          type: String,
          value: ""
        },

        label: {
          type: String,
          value: ""
        },

        /**
         * One of the recognized database types: ('entrez-gene','uniprot','pubmed','omim', etc)
         */
        type: {
          type: String,
          value: ""
        },

        /** A map containing the names of databases as keys, and the URL as the associated value. */
        typeMap: {
          type: Map,
          readonly: true,
          value: function() {
            return new Map([
              ["biocarta", "https://cgap.nci.nih.gov/Pathways/BioCarta/"],
              ["clinicaltrials", "https://clinicaltrials.gov/ct2/show/"],

              ["ensembl", "http://www.ensembl.org/id/"],
              ["entrezgene", "http://www.ncbi.nlm.nih.gov/gene/"],

              ["go", "http://amigo.geneontology.org/amigo/term/"],
              [
                "hgnc",
                "http://www.genenames.org/cgi-bin/gene_symbol_report?hgnc_id=HGNC:"
              ],
              [
                "humancyc",
                "https://humancyc.org/HUMAN/NEW-IMAGE?type=NIL&redirect=T&object="
              ],
              ["kegg", "http://www.genome.jp/kegg-bin/show_pathway?"],
              ["interpro", "https://www.ebi.ac.uk/interpro/entry/"],

              ["netpath", "http://www.netpath.org/pathways?path_id="],

              ["omim", "http://omim.org/entry/"],
              ["pfam", "https://pfam.xfam.org/family/"],
              ["pharmgkb", "https://www.pharmgkb.org/gene/"],
              [
                "pid",
                "http://www.ndexbio.org/#/search?searchType=All&searchString=labels:"
              ],
              ["pir", "https://pir.georgetown.edu/cgi-bin/ipcEntry?id="],

              ["pubmed", "http://www.ncbi.nlm.nih.gov/pubmed/"],
              [
                "reactome",
                "http://www.reactome.org/content/query?cluster=true&q="
              ],
              [
                "unigene",
                "https://www.ncbi.nlm.nih.gov/UniGene/clust.cgi?UGID=720192&TAXID=9606&SEARCH="
              ],

              ["uniprot", "http://www.uniprot.org/uniprot/"],

              ["wikipedia", "https://en.wikipedia.org/wiki/"],
              ["wikipathways", "http://www.wikipathways.org/index.php/Pathway:"]
            ]);
          }
        },

        /** A flag that indicates whether or not the link should open up in a new window. */
        useNewWindow: {
          type: Boolean,
          value: false
        }
      };
    }

    /**
     * This method is responsible for handling the tap event on the link.
     * @param {Event} e the event object
     */
    _handleTap(e) {
      var url = this.typeMap.get(this.type);
      if (url == null) {
        throw "Unrecognized database: " + this.type;
      }
      if (this.useNewWindow) {
        window.open(url + this.id);
      } else {
        window.location = url + this.id;
      }
    }
  };
