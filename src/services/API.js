import serviceBase from "./serviceBase";

const productService = {
  /**
   * Gets current user
   * @returns {*}
   */
  //these are sample api call's
  //post api
  saveSiteConfig: data => serviceBase.post("/shoojus/addSiteConfig", data),

  //get api
  getEvents: () => serviceBase.get("/events"),
  getAscaAffiliatesContent1: () => serviceBase.get("/shoojus/affiliate"),
  getAffiliateConfig: user =>
    serviceBase.get("/shoojus/affiliate_config/" + user),
  getNrpaEvents: () => serviceBase.get("/shoojus/nrpa_events"),
  getBlogs: () => serviceBase.get("/blogs"),
  getTemplateconfig: data =>
    serviceBase.get("/shoojus/getTemplateconfig/" + data)
};
export default productService;
