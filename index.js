import {
    loadAdvancedSearchQueryActions,
    loadSearchActions,
    loadSearchAnalyticsActions
  } from 'https://static.cloud.coveo.com/atomic/v1/headless/headless.esm.js';

  let headlessEngine;
  let isFilterApplied = false;
  (async () => {
    await customElements.whenDefined('atomic-search-interface');
    const searchInterface = document.querySelector('atomic-search-interface');

    searchInterface.querySelector('.this-year-button').addEventListener('click', filterFor2022);

    // Initialization
    await searchInterface.initialize({
      accessToken: 'xx564559b1-0045-48e1-953c-3addd1ee4457',
      organizationId: 'searchuisamples'
    });
    
    headlessEngine = searchInterface.engine;
    // Trigger a first search
    searchInterface.executeFirstSearch();
  })();

  function filterFor2022(e) {
    // TODO: Task #2
    const searchActions = loadSearchActions(headlessEngine);

    const advancedSearchQueryActions = loadAdvancedSearchQueryActions(headlessEngine);
    const searchAnalyticsActions = loadSearchAnalyticsActions(headlessEngine)
    if (!isFilterApplied) {
      const updateAction = advancedSearchQueryActions.updateAdvancedSearchQueries({
        aq:'@year===2022'
      });
      headlessEngine.dispatch(updateAction);
      document.querySelector('.this-year-button').classList.add('active');
    
    }
    else {
      const clearAction = advancedSearchQueryActions.updateAdvancedSearchQueries({ 
        aq: '',
      });
      headlessEngine.dispatch(clearAction);
      document.querySelector('.this-year-button').classList.remove('active');
    }
    
    const {logStaticFilterSelect,logStaticFilterDeselect} = loadSearchAnalyticsActions(headlessEngine); 
    const {executeSearch} = loadSearchActions(headlessEngine);
    
    let addFitler = logStaticFilterSelect({ 
      staticFilterId: 'year',
      staticFilterValue: '2022'
    })

    let removeFilter = logStaticFilterDeselect({ 
      staticFilterId: 'year',
      staticFilterValue: '2022'
    })
    
  const searchAction = searchActions.executeSearch(isFilterApplied ? removeFilter : addFitler);

    headlessEngine.dispatch(searchAction);

    isFilterApplied = !isFilterApplied;
  }
