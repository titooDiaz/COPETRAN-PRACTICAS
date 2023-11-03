let dataTable;
let dataTableIsInitialized = false;

const dataTableOptions = {
    dom: 'Bfrtilp',
  buttons: [
    {
      extend: 'excelHtml5',
      text: '<i class="fas fa-file-excel"></i> ',
      titleAttr: 'Exportar a Excel',
      className: 'bg-gray-400',
    },
    {
      extend: 'pdfHtml5',
      text: '<i class="fas fa-file-pdf"></i> ',
      titleAttr: 'Exportar a PDF',
      className: 'bg-gray-400',
    },
    {
      extend: 'print',
      text: '<i class="fa fa-print"></i> ',
      titleAttr: 'Imprimir',
      className: 'bg-gray-400',
    },
  ],
  lengthMenu: [5, 10, 15, 20, 100],
    columnDefs: [
        { className: "cursor-pointer", targets: [0, 1, 2, 3, 4, 5] },
        { orderable: true, targets: [0,1,2,3,4,5] },
        { responsivePriority: 1, targets: [0, 1, 2, 3, 4, 5] }
    ],

    language: {
        processing: 'Procesando...',
        lengthMenu: 'Mostrar _MENU_ registros',
        zeroRecords: 'No se encontraron resultados',
        emptyTable: 'Ningún dato disponible en esta tabla',
        infoEmpty: 'Mostrando registros del 0 al 0 de un total de 0 registros',
        infoFiltered: '(filtrado de un total de _MAX_ registros)',
        search: 'Buscar:',
        infoThousands: ',',
        loadingRecords: 'Cargando...',
        decimal: ',',
        thousands: '.',
        info: 'Mostrando _START_ a _END_ de _TOTAL_ registros',
        paginate: {
            first: 'Primero',
            last: 'Último',
            next: 'Siguiente',
            previous: 'Anterior',
            },
      },
    

    pageLength: 4,
    destroy: true,
    responsive: true,
    createdRow: function (row, data, dataIndex) {
        $(row).addClass('details');
    }
};

const initDataTable = async () => {
    if (dataTableIsInitialized) {
        dataTable.destroy();
    }

    await listProgrammers();

    dataTable = $("#datatable-programmers").DataTable(dataTableOptions);
    dataTableIsInitialized = true;
};

const listProgrammers = async () => {
    try {
        const response = await fetch("http://127.0.0.1:8000/list_personas/");
        const data = await response.json();

        let content = ``;
        data.personas.forEach((personas, index) => {
            content += `
                <tr>
                    <td class="text-white bg-gray-800 p-2">${personas.email}</td>
                    <td class="text-white bg-gray-800 p-2">${personas.nombre}</td>
                    <td class="text-white bg-gray-800 p-2">${personas.apellido}</td>
                    <td class="text-white bg-gray-800 p-2">${personas.fecha_nacimiento}</td>
                    <td class="text-white bg-gray-800 p-2">${personas.tipo_documento}</td>
                    <td class="text-white bg-gray-800 p-2">${personas.documento}</td>
                </tr>`;
        });
        tableBody_programmers.innerHTML = content;
    } catch (ex) {
        alert(ex);
    }
};

window.addEventListener("load", async () => {
    await initDataTable();
});