<template>

    <div class="card">
        <Accordion :activeIndex="0">
            <AccordionTab header="Nuestro compromiso">
                <p class="m-0">
                    Nuestro compromiso es brindar la máxima calidad en servicios integrales de asistencia a todos los
                    asociados. <span style="font-weight: 600;">Medicar Work</span> de Nueva Mutual de Servicios es la
                    única prestadora en el mercado que ampara
                    al personal adicional sin nominar.
                </p>
            </AccordionTab>
            <AccordionTab header="Adicional sin nominar">
                <ul>
                    <li>Personal Temporario.</li>
                    <li>Eventuales.</li>
                </ul>
                <br />
                <p><sub>(*) Se considera personal eventual a los trabajadores que realizan tareas en forma esporádica,
                        con permanencia menor a 90 días.</sub></p>
            </AccordionTab>
            <AccordionTab header="Prestaciones">
                <p class="m-0">
                    Contratando una persona nominada, acceda a la protección extra de hasta dos personas más, sin
                    necesidad de declarar sus nombres ni DNI, a un costo muy conveniente.</p>
                <ul>
                    <li>Muerte Accidental.</li>
                    <li>Incapacidad Total y/o Parcial Permanente.</li>
                    <li>Asistencia Médica y Farmacéutica sin franquicias y sin límites</li>
                    <li>Prótesis y Órtesis.</li>
                    <li>Tareas en altura hasta 7 metros.</li>
                    <li>AP 24 horas.</li>
                </ul>
            </AccordionTab>
            <AccordionTab header="Beneficios">
                <ul>
                    <li>Protección total mientras dure el contrato de trabajo temporario. Sin Altas, ni trámites.</li>
                    <li>Respaldo ante accidentes de personas que no estaban a conocimiento de la empresa.</li>
                </ul>
            </AccordionTab>
            <AccordionTab header="Consideraciones especiales">
                <ul>
                    <li>La prestación de adicionales sin nominar sólo puede tomarse con la contratación de una persona
                        nominada.
                    </li>
                    <li>Protección de hasta 2 personas por cada contrato de persona nominada.</li>
                    <li>Familiares del personal nominado y del contratante no se consideran adicionales sin nominar.
                    </li>
                    <li>Edades permitidas: Entre 14 y 64 años (tope: al cumplir 65 años).</li>
                    <li>En caso de accidente: el ADIC. SIN NOMINAR toma nombre del accidentado y hasta no tener el alta
                        del mismo no queda liberada la prestación para los restantes adicionales.</li>

                </ul>
            </AccordionTab>
        </Accordion>
    </div>
</template>
