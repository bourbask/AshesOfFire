import Article from '../../../components/Article/Article';
import Section from '../../../components/Redaction/Section/Section';

export default function PseudoRules() {
  return <Article lang='fr' title='Règles de rédaction du pseudo'>
    <Section title='Changer de pseudo' content='Possible toutes les 48h'/>
    <Section title='Nommer son R.E.X.' content='Les caractères spéciaux ne sont pas autorisés'/>
    {/* À noter: Il est préférable de noter dans un document texte ton pseudo, sinon tu risquerais de ne plus pouvoir te connecter. */}
  </Article>;
}
