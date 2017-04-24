import Ember from 'ember';
/**
 * blah
 */
function createQuery (catalog, searchString) {
  const queryParts = Ember.A([]);

  if (searchString) {
    queryParts.push(`title:${searchString}`);
  }

  for (let prop in catalog.query) {
    // If it's an array handle it as such..
    if (Array.isArray(catalog.query[prop])) {
      if (catalog.query[prop].length) {
        queryParts.push(getFieldQuery(prop, catalog.query[prop]));
      }
    }
    // If it's a string handle it as such.
    if (typeof catalog.query[prop] === 'string') {
      if (prop === 'orgid' && catalog.query[prop] === 'selfOrg') {
        console.log('orgid called....');
      } else if (prop === 'owner' && catalog.query[prop] === 'self') {
        console.log('owner called...');
      } else {
        queryParts.push(`${prop}:${catalog.query[prop]}`);
      }
    }
  }

  return queryParts.join(' AND ');
}

function getFieldQuery (fieldName, fieldArray) {
  const removes = fieldArray.filter(startsWithDash);
  const removeParts = removes.map(val => {
    const stripped = val.replace('-', '');
    return `-${fieldName}:"${stripped}"`;
  });

  const adds = fieldArray.filter(startsWithoutDash);
  const addParts = adds.map(val => {
    return `${fieldName}:"${val}"`;
  });

  // collect parts into an array so we can cleanly join them
  const q = Ember.A([]);
  if (addParts.length) {
    q.push(`( ${addParts.join(' OR ')} )`);
  }
  if (removeParts.length) {
    q.push(`( ${removeParts.join(' OR ')} )`);
  }

  const query = q.join(' AND ');

  return query;
}

function startsWithDash (str) {
  return str[0] === '-';
}

function startsWithoutDash (str) {
  return !startsWithDash(str);
}

export default {
  createQuery
};
