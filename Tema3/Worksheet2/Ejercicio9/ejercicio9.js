function lanzarDado()
{
    return Math.floor(Math.random() * (7 - 1) + 1);
}

doses = 0
treses = 0
cuatros = 0
cincos = 0
seises = 0
sietes = 0
ochos = 0
nueves = 0
dieces = 0
onces = 0
doces = 0

arrayBi = new Array(6);
for(i=0; i<6; i++)
    arrayBi[i] = new Array(6);

for(i=0; i<6; i++)
    for(j=0; j<6; j++)
    {
        arrayBi[i][j] = 0;
    }

for(i=0;i<36000;i++)
{
    dado1 = lanzarDado();
    dado2=  lanzarDado();
    lanzamiento = dado1 + dado2;

    arrayBi[dado1 -1][dado2 -1]+=1;

    if (lanzamiento == 2)
        doses += 1;
    if (lanzamiento == 3)
        treses += 1;
    if (lanzamiento == 4)
        cuatros += 1;
    if (lanzamiento == 5)
        cincos += 1;
    if (lanzamiento == 6)
        seises += 1;
    if (lanzamiento == 7)
        sietes += 1;
    if (lanzamiento == 8)
        ochos += 1;
    if (lanzamiento == 9)
        nueves += 1;
    if (lanzamiento == 10)
        dieces += 1;
    if (lanzamiento == 11)
        onces += 1;
    if (lanzamiento == 12)
        doces += 1;
}

document.write("doses: " + doses + "<br>" + "treses: " + treses + "<br>" +
"cuatros: " + cuatros + "<br>" + "cincos: " + cincos + "<br>" + "seises: " + seises + "<br>" +
"sietes: " + sietes + "<br>" + "ochos: " + ochos + "<br>" + "nueves: " + nueves + "<br>" +
"dieces: " + dieces + "<br>" + "onces: " + onces + "<br>" + "doces: " + doces + "<br>");