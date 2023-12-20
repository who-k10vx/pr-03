import logo from './logo.svg';
import './App.css';
import Record from './Record';
import { useEffect, useState } from 'react';
const App = () => {
  const [Allrecord, setAllRecord] = useState([
    {
      id: 2,
      name: "Almaak",
      price:  "$500",
      imd_rating: "5.4",
      year:2023,
      category: "Green"
    },
    {
      id: 3,
      name: "Ashoka",
      price:  "$250",
      imd_rating: "6.4",
      year:2023,
      category: "Green"
    },
    {
      id: 5,
      name: "Alnair",
      price:  "$50",
      imd_rating: "8.4",
      year:2023,
      category: "Yellow"
    },
    {
      id: 5,
      name: "Alcyone",
      price:  "$50",
      imd_rating: "9.4",
      year:2023,
      category: "Yellow"
    },
    {
      id: 3,
      name: "Aldebaran",
      price:  "$250",
      imd_rating: "4.4",
      year:2023,
      category: "Green"
    },
    {
      id: 5,
      name: "Alderamin",
      price:  "$50",
      imd_rating: "3.4",
      year:2023,
      category: "Yellow"
    },
    {
      id: 3,
      name: "Alfirk",
      price:  "$250",
      imd_rating: "2.4",
      year:2023,
      category: "Green"
    },
    {
      id: 5,
      name: "Algedi",
      price:  "$50",
      imd_rating: "8.4",
      year:2023,
      category: "Yellow"
    },
    {
      id: 3,
      name: "Algenubi",
      price:  "$250",
      imd_rating: "5.4",
      year:2023,
      category: "White"
    },
    {
      id: 6,
      name: "Algorab",
      price:  "$20",
      imd_rating: "6.4",
      year:2023,
      category: "Yellow"
    },
    {
      id: 8,
      name: "Alhena",
      price:  "$150",
      imd_rating: "8.8",
      year:2023,
      category: "White"
    },
    {
      id: 5,
      name: "Azha",
      price:  "$50",
      imd_rating: "8.4",
      year:2023,
      category: "Yellow"
    },
    {
      id: 9,
      name: "Auva",
      price:  "$100",
      imd_rating: "9.4",
      year:2023,
      category: "White"
    },
    {
      id: 1,
      name: "Ascella",
      price:  "$999",
      imd_rating: "8.2",
      year:2023,
      category: "Blue"
    },
    {
      id: 2,
      name: "Arneb",
      price:  "$500",
      imd_rating: "2.4",
      year:2023,
      category: "Green"
    },
    {
      id: 3,
      name: "Farkadain",
      price:  "$250",
      imd_rating: "8.4",
      year:2023,
      category: "Green"
    },
    {
      id: 5,
      name: "Angentenar",
      price:  "$50",
      imd_rating: "8.",
      year:2023,
      category: "Yellow"
    },
    {
      id: 4,
      name: "Alzirr",
      price:  "$100",
      imd_rating: "8.42",
      year:2023,
      category: "Blue"
    },
    {
      id: 5,
      name: "Aludra ",
      price:  "$50",
      imd_rating: "2.4",
      year:2023,
      category: "Yellow"
    },
    {
      id: 3,
      name: "Ashoka",
      price:  "$250",
      imd_rating: "2.4",
      year:2023,
      category: "Green"
    },
    {
      id: 5,
      name: "Altair",
      price:  "$50",
      imd_rating: "8.3",
      year:2023,
      category: "Yellow"
    },
    {
      id: 3,
      name: "Alshain",
      price:  "$250",
      imd_rating: "4.4",
      year:2023,
      category: "Green"
    },
    {
      id: 5,
      name: "Ashoka",
      price:  "$50",
      imd_rating: "5.4",
      year:2023,
      category: "Yellow"
    },
    {
      id: 3,
      name: "Alcyone",
      price:  "$250",
      imd_rating: "6.4",
      year:2023,
      category: "White"
    },
    {
      id: 6,
      name: "Alderamin",
      price:  "$20",
      imd_rating: "7.4",
      year:2023,
      category: "Yellow"
    },
    {
      id: 7,
      name: "Algenubi",
      price:  "$400",
      imd_rating: "8.5",
      year:2023,
      category: "Blue"
    },
    {
      id: 8,
      name: "Avior",
      price:  "$150",
      imd_rating: "8.",
      year:2023,
      category: "White"
    },
    {
      id: 5,
      name: "Alrescha",
      price:  "$50",
      imd_rating: "8.2",
      year:2023,
      category: "Yellow"
    },
    {
      id: 9,
      name: "Alnilam",
      price:  "$100",
      imd_rating: "8.2",
      year:2023,
      category: "White"
    },
    {
      id: 9,
      name: "Alpheratz",
      price:  "$100",
      imd_rating: "8.2",
      year:2023,
      category: "Green"
    }
  ]);


  const [filter, setFilter] = useState([]);


  const handleClick = (category) => {
    let oldrecord = [...Allrecord];


    if (category === "All") {
      setFilter(Allrecord)
    } else {
      oldrecord = Allrecord.filter((item) => {
        return item.category === category
      })
      setFilter(oldrecord)
    }
  }
  useEffect(() => {
    setFilter(Allrecord)
  }, [])
  return (
    <>
      <Record
        Allrecorddata={filter}
        btnclick={handleClick}
      />
    </>
  )
};
export default App;
