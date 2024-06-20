import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // Vous pouvez ici envoyer les données à un serveur ou les traiter comme nécessaire
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Un thermostat connecté permet d’ajuster la température de votre logement en temps réel, en fonction de la météo, du moment de la journée ou de paramétrages de votre choix. Vous pouvez désormais bénéficier d’une aide financière lorsque vous faites installer un tel dispositif chez vous, que vous soyez propriétaire ou locataire, et quel que soit votre niveau de revenu.
        </p>
        <p>
          Dans le cadre d’un « plan thermostat », le Gouvernement a notamment :
          publié une plaquette d’information destinée aux particuliers afin de présenter différents renseignements relatifs à l’installation d’un système de régulation de la température dans un logement ;
          et lancé le dispositif « Coup de pouce pilotage connecté du chauffage pièce par pièce ». 
        </p>
        <p>
          Il s’agit d’une aide financière dont vous pouvez bénéficier si vous faites installer un thermostat programmable connecté dans votre logement entre le 1er décembre 2023 et le 31 décembre 2024.
        </p>
        <p>
          Un thermostat programmable connecté vous permet de définir la température des différentes pièces de votre logement munies d’un système de chauffage (radiateur, plancher chauffant…), notamment en fonction de plages horaires.
        </p>
        <p>
          Le caractère connecté du thermostat vous permet par ailleurs de contrôler le dispositif à distance via votre téléphone, et donc de régler la température de votre logement en étant à l'extérieur. Vos consommations d’énergie sont ainsi plus proches de vos besoins réels.
        </p>
        <p>
          Vous pouvez par exemple indiquer que la température des différentes pièces de votre logement doit diminuer quotidiennement à partir de l’heure à laquelle vous partez pour vous rendre à votre lieu de travail ; puis, vous pouvez augmenter à distance la température de certaines pièces lorsque vous êtes proche de votre domicile pour bénéficier immédiatement d’un niveau de chaleur qui vous convienne. Vous pouvez modifier, sans difficulté, une diminution programmée de la température si vous télétravaillez un jour de manière exceptionnelle.
        </p>
        <p>
          La régulation de la température peut par ailleurs être adaptée à chaque pièce. Par exemple, la salle de bains, la salle de séjour et la chambre n’ont pas besoin d’être chauffées de la même manière et aux mêmes heures.
        </p>
        <div className='ppandform'> 
        <div className='pointspositifs'>
          <p>POINTS POSITIFS DES THERMOSTATS :</p>
          <p>Un thermostat électrique pour radiateur est un dispositif qui contrôle la température de votre radiateur en fonction de vos préférences de confort. Voici comment il fonctionne concrètement :</p>
          <p>Capteur de température : Le thermostat est équipé d'un capteur de température qui mesure la température ambiante de la pièce où il est installé.</p>
          <p>Réglage de la température : Vous pouvez régler la température désirée à l’aide de votre application. Ce réglage détermine la température à laquelle le radiateur doit maintenir la pièce.</p>
          <p>Comparaison et contrôle : Une fois que vous avez réglé la température, le thermostat compare la température ambiante mesurée par son capteur à la température désirée que vous avez sélectionnée. S'il détecte que la température ambiante est inférieure à la température désirée, il envoie un signal au radiateur pour qu'il commence à chauffer.</p>
          <p>Activation du radiateur : Le thermostat envoie un signal électrique au radiateur pour l'activer. Le radiateur se met alors en marche et commence à chauffer le liquide ou l'air à l'intérieur, selon le type de radiateur.</p>
          <p>Maintien de la température : Une fois que la température ambiante atteint le niveau que vous avez réglé, le thermostat coupe l'alimentation électrique du radiateur. Cela évite que la pièce ne devienne trop chaude et permet d'économiser de l'énergie.</p>
          <p>En clair, le thermostat permet aux ménages de réguler la température de leur logement et de faire jusqu'à 25% d'économies d'énergie.</p>
          <ul>
            <li>ROBINET THERMOSTATIQUE = CHAUDIÈRE À GAZ INDIVIDUELLE</li>
            <li>THERMOSTAT ÉLECTRIQUE = RADIATEURS ÉLECTRIQUES</li>
          </ul>
          <p>Pourquoi c’est gratuit ?</p>
          <p>Le programme est financé par le PN CEE (certificat d’économies d'énergies) représenté par les grandes entreprises polluantes telles que TOTAL ENERGIE, ESSO, AIRBUS et AIR FRANCE, qui financent les travaux de rénovation énergétique des foyers français au lieu de payer des taxes à l'État.</p>
        </div>
        <form onSubmit={handleSubmit} className="form-container">
          <p className='eligib'>Faire un test d'éligibilité :</p>
          <div className="form-group">
            <label>Prénom :</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Nom :</label>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Email :</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Téléphone :</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Adresse :</label>
            <input type="text" name="address" value={formData.address} onChange={handleChange} required />
          </div>
          <button type="submit">Envoyer</button>
        </form>
        </div>
      </header>
    </div>
  );
}

export default App;
