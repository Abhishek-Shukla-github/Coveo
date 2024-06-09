import {
    loadAdvancedSearchQueryActions,
    loadSearchActions,
    loadSearchAnalyticsActions
  } from 'https://static.cloud.coveo.com/atomic/v1/headless/headless.esm.js';

  let headlessEngine;
  (async () => {
    await customElements.whenDefined('atomic-search-interface');
    const searchInterface = document.querySelector('atomic-search-interface');

    searchInterface.querySelector('.this-year-button').addEventListener('click', filterFor2022);

    await searchInterface.initialize({
      accessToken: 'xx564559b1-0045-48e1-953c-3addd1ee4457',
      organizationId: 'searchuisamples'
    });
    
    headlessEngine = searchInterface.engine;
    searchInterface.executeFirstSearch();
  })();

  function filterFor2022(e) {
    let buttonClassList = e.currentTarget.classList
    let isFilterApplied = buttonClassList.contains("active")
    const {executeSearch} = loadSearchActions(headlessEngine);
    const {updateAdvancedSearchQueries} = loadAdvancedSearchQueryActions(headlessEngine);
    const {logStaticFilterSelect,logStaticFilterDeselect} = loadSearchAnalyticsActions(headlessEngine); 

    //Filteration Logic
    headlessEngine.dispatch(updateAdvancedSearchQueries({
      aq: isFilterApplied ? '' : '@year===2022'
    }))
    
    //Analytics Logging Logic
    let staticFilterParams = { 
      staticFilterId: 'year',
      staticFilterValue: '2022'
    }

    if(isFilterApplied){
      headlessEngine.dispatch(
        executeSearch(logStaticFilterDeselect(staticFilterParams))
      )
    }
    else headlessEngine.dispatch(
      executeSearch(logStaticFilterSelect(staticFilterParams))
    )

    buttonClassList.toggle('active');
  }
