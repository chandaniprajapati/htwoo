var config = {"cacheBust":true,"cleanPublic":true,"defaultPattern":"all","defaultShowPatternInfo":false,"ishControlsHide":{"s":false,"m":false,"l":false,"full":false,"random":false,"disco":false,"hay":true,"mqs":false,"find":false,"views-all":false,"views-annotations":false,"views-code":false,"views-new":false,"tools-all":false,"tools-docs":false},"ishViewportRange":{"s":[240,500],"m":[500,800],"l":[800,2600]},"logLevel":"info","outputFileSuffixes":{"rendered":".rendered","rawTemplate":"","markupOnly":".markup-only"},"paths":{"source":{"root":"./source/","patterns":"./source/_patterns/","data":"./source/_data/","meta":"./source/_meta/","annotations":"./source/_annotations/","styleguide":"dist/","patternlabFiles":{"general-header":"views/partials/general-header.mustache","general-footer":"views/partials/general-footer.mustache","patternSection":"views/partials/patternSection.mustache","patternSectionSubgroup":"views/partials/patternSectionSubgroup.mustache","viewall":"views/viewall.mustache"},"js":"./source/js","images":"./source/images","fonts":"./source/fonts","css":"./source/css"},"public":{"root":"public/","patterns":"public/patterns/","data":"public/styleguide/data/","annotations":"public/annotations/","styleguide":"public/styleguide/","js":"public/js","images":"public/images","fonts":"public/fonts","css":"public/css/"}},"patternExtension":"hbs","patternStateCascade":["inprogress","inreview","complete"],"patternExportAll":false,"patternExportDirectory":"pattern_exports","patternExportPatternPartials":[],"patternExportPreserveDirectoryStructure":true,"patternExportRaw":false,"patternMergeVariantArrays":true,"renderFlatPatternsOnViewAllPages":false,"serverOptions":{"wait":1000},"starterkitSubDir":"dist","styleGuideExcludes":[],"theme":{"color":"light","density":"compact","layout":"vertical"},"uikits":[{"name":"uikit-workshop","package":"@pattern-lab/uikit-workshop","outputDir":"","enabled":true,"excludedPatternStates":[],"excludedTags":[]}],"engines":{"handlebars":{"extend":"helpers/*.js"}}};
var ishControls = {"ishControlsHide":{"s":false,"m":false,"l":false,"full":false,"random":false,"disco":false,"hay":true,"mqs":false,"find":false,"views-all":false,"views-annotations":false,"views-code":false,"views-new":false,"tools-all":false,"tools-docs":false}};
var navItems = {"patternGroups": [{"patternGroupLC":"atoms","patternGroupUC":"Atoms","patternGroup":"atoms","patternGroupDash":"atoms","patternGroupItems":[{"patternSubgroupLC":"global","patternSubgroupUC":"Global","patternSubgroup":"global","patternSubgroupDash":"global","patternSubgroupItems":[{"patternPartial":"atoms-primary-colors","patternName":"Primary Colors","patternState":"","patternPath":"atoms-global-primary-colors/atoms-global-primary-colors.rendered.html","name":"atoms-global-primary-colors","isDocPattern":false,"order":1,"variantOrder":0},{"patternPartial":"atoms-neutral-colors","patternName":"Neutral Colors","patternState":"","patternPath":"atoms-global-neutral-colors/atoms-global-neutral-colors.rendered.html","name":"atoms-global-neutral-colors","isDocPattern":false,"order":2,"variantOrder":0},{"patternPartial":"atoms-other-colors","patternName":"Other Colors","patternState":"","patternPath":"atoms-global-other-colors/atoms-global-other-colors.rendered.html","name":"atoms-global-other-colors","isDocPattern":false,"order":3,"variantOrder":0},{"patternPartial":"atoms-button-colors","patternName":"Button Colors","patternState":"","patternPath":"atoms-global-button-colors/atoms-global-button-colors.rendered.html","name":"atoms-global-button-colors","isDocPattern":false,"order":4,"variantOrder":0},{"patternPartial":"atoms-primary-button-colors","patternName":"Primary Button Colors","patternState":"","patternPath":"atoms-global-primary-button-colors/atoms-global-primary-button-colors.rendered.html","name":"atoms-global-primary-button-colors","isDocPattern":false,"order":5,"variantOrder":0},{"patternPartial":"viewall-atoms-global","patternName":"View All","patternPath":"atoms-global/index.html","patternGroup":"atoms","patternSubgroup":"global","name":"atoms-global","isDocPattern":true,"order":9007199254740991}],"order":-1}],"order":0,"patternItems":[{"patternPartial":"viewall-atoms-all","patternName":"View all Atoms","patternPath":"atoms/index.html","name":"atoms","isDocPattern":true,"order":9007199254740991}]}], "ishControlsHide": {"s":false,"m":false,"l":false,"full":false,"random":false,"disco":false,"hay":true,"mqs":false,"find":false,"views-all":false,"views-annotations":false,"views-code":false,"views-new":false,"tools-all":false,"tools-docs":false}};
var patternPaths = {"atoms":{"button-colors":"atoms-global-button-colors","neutral-colors":"atoms-global-neutral-colors","other-colors":"atoms-global-other-colors","primary-button-colors":"atoms-global-primary-button-colors","primary-colors":"atoms-global-primary-colors"}};
var viewAllPaths = {"atoms":{"global":"atoms-global","all":"atoms"}};
var plugins = [];
var defaultShowPatternInfo = false;
var defaultPattern = "all";
module.exports = { config, ishControls, navItems, patternPaths, viewAllPaths, plugins, defaultShowPatternInfo, defaultPattern };