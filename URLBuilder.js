/**
 * This class is used to create 2 different types of URLs:
 * (1) Navigation URLs, where the result is a URL to a specific web page.
 * (2) REST URLs, where the result is the URL for a specific REST endpoint.
 */
class URLBuilder {
  constructor() {
    this.navUrlMap = new Map([
      ["biocarta", "https://cgap.nci.nih.gov/Pathways/BioCarta/"],
      ["clinicaltrials", "https://clinicaltrials.gov/ct2/show/"],

      ["ensembl", "http://www.ensembl.org/id/"],
      ["entrezgene", "http://www.ncbi.nlm.nih.gov/gene/"],

      ["go", "http://amigo.geneontology.org/amigo/search/annotation?q="],
      [
        "hgnc",
        "http://www.genenames.org/cgi-bin/gene_symbol_report?hgnc_id=HGNC:"
      ],
      [
        "humancyc",
        "https://humancyc.org/HUMAN/NEW-IMAGE?type=NIL&redirect=T&object="
      ][("kegg", "http://www.genome.jp/kegg-bin/show_pathway?")],
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
      ["reactome", "http://www.reactome.org/content/query?cluster=true&q="],
      [
        "unigene",
        "https://www.ncbi.nlm.nih.gov/UniGene/clust.cgi?UGID=720192&TAXID=9606&SEARCH="
      ],

      ["uniprot", "http://www.uniprot.org/uniprot/"],

      ["wikipedia", "https://en.wikipedia.org/wiki/"],
      ["wikipathways", "http://www.wikipathways.org/index.php/Pathway:"]
    ]);

    this.restUrlMap = new Map([
      [
        "pubmed",
        "https://www.ebi.ac.uk/europepmc/webservices/rest/search?format=json&resulttype=core&query=+src:med+ext_id:"
      ],
      [
        "mygene",
        "https://mygene.info/v3/query?fields=entrezgene,name,alias,symbol,summary,hgnc,MIM,go,interpro,pathway,pdb,pfam,pharmgkb,pir,refseq,uniprot&species=human&q=symbol:"
      ]
    ]);
  }

  /**
   * This method builds a URL for a specified database, and a given ID.
   * @param {String} databaseName The name of the database whose URL you want to retrieve
   * @param {String} id The ID of the record you want to retrieve
   */
  buildNavUrl(databaseName, id) {
    return this.__buildUrl(this.navUrlMap, databaseName, id);
  }

  /**
   * This method builds a URL for a specific database, and a given ID. The result is a URL
   * suitable for use in a REST call.
   * @param {String} databaseName The name of the database whose URL you want to retrieve
   * @param {String} id The ID of the record you want to retrieve
   */
  buildRestUrl(databaseName, id) {
    return this.__buildUrl(this.restUrlMap, databaseName, id);
  }

  /**
   * This method builds a URL.
   * @param {Map} map The map whose keys are database names, and whose values are URLs
   * @param {String} databaseName The name of the database
   * @param {String} id The ID of the record you want to retrieve
   */
  __buildUrl(map, databaseName, id) {
    let url = map.get(databaseName);
    let newUrl = "";
    if (url) {
      newUrl = url + id;
    } else {
      throw "Unable to find URL for database: " + databaseName;
    }

    return newUrl;
  }
}
