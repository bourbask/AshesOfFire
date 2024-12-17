import * as React from 'react';

import Article from '../../../components/Article/Article';
import Section from '../../../components/Redaction/Section/Section';

export default function PseudoRules() {
  const results = {
    1: true,
    2: true,
  };

  return <Article lang='fr' title='Règles de rédaction du pseudo'>
    <Section title='Changer de pseudo' content='Possible toutes les 48h'/>
    <Section title='Nommer son R.E.X.' content='Les caractères spéciaux ne sont pas autorisés'/>
  </Article>;
}
