"use client"

import * as React from "react"

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

import {
  Card,
  CardContent,
} from "@/components/ui/card"




interface ModalProps {
    children?: React.ReactNode;
}

const produit = [
    {
      nom: "Tuff",
      catégorie:"Sacoche",
      description:"Sac en cuire de lièvre",
      enStock: "OUI",
      totalAmount: "$250.00",
      popularite: "Moyenne",
    },
    {
        nom: "Tuff",
        catégorie:"Sacoche",
        description:"Sac en cuire de lièvre",
        enStock: "OUI",
        totalAmount: "$250.00",
        popularite: "Moyenne",
    },
    {
        nom: "Tuff",
        catégorie:"Sacoche",
        description:"Sac en cuire de lièvre",
        enStock: "OUI",
        totalAmount: "$250.00",
        popularite: "Moyenne",
    },
    {
        nom: "Tuff",
        catégorie:"Sacoche",
        description:"Sac en cuire de lièvre",
        enStock: "OUI",
        totalAmount: "$250.00",
        popularite: "Moyenne",
    },
    {
        nom: "Tuff",
        catégorie:"Sacoche",
        description:"Sac en cuire de lièvre",
        enStock: "OUI",
        totalAmount: "$250.00",
        popularite: "Moyenne",
    },
    {
        nom: "Tuff",
        catégorie:"Sacoche",
        description:"Sac en cuire de lièvre",
        enStock: "OUI",
        totalAmount: "$250.00",
        popularite: "Moyenne",
    },
    {
        nom: "Tuff",
        catégorie:"Sacoche",
        description:"Sac en cuire de lièvre Spécial Hiver",
        media: "",
        enStock: "OUI",
        totalAmount: "$250.00",
        popularite: "Moyenne",
    },
  ];
   
  export function TableProduit() {
    return (
      <Card>
        <CardContent>
          <Table className=" table-auto mt-5">
            <TableCaption>Liste des Produits Récents.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Nom</TableHead>
                <TableHead>
                  En Stock
                </TableHead>
                <TableHead>
                  Description
                </TableHead>
                <TableHead>
                  Catégorie
                </TableHead>
                <TableHead>
                  Popularité
                </TableHead>
                <TableHead className=" text-right">
                  Prix
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {produit.map((produit) => (
                <TableRow key={produit.nom}>
                  <TableCell className="font-medium">{produit.nom}</TableCell>
                  <TableCell>{produit.enStock}</TableCell>
                  <TableCell>{produit.description}</TableCell>
                  <TableCell>{produit.catégorie}</TableCell>
                  <TableCell>{produit.popularite}</TableCell>
                  <TableCell className="text-right">
                    {produit.totalAmount}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    );
  };