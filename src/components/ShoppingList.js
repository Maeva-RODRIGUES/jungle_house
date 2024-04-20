import { plantList } from '../datas/plantList'

//Component ShoppingList
// Cette fonction génère une liste de plantes.
function ShoppingList() {
	// On extrait les catégories uniques des plantes disponibles
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	// Retourne un élément JSX représentant la liste de courses
	return (
		<div>
			{/* Liste des catégories */}
			<ul>
				{/* Pour chaque catégorie, on crée un élément de liste */}
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			{/* Liste des plantes */}
			<ul>
				{/* Pour chaque plante, on crée un élément de liste */}
				{plantList.map((plant) => (
					<li key={plant.id}>{plant.name}</li>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList