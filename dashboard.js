function atualizarGrafico() {

    const dias = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"];
    const desempenho = [];

    const linhas = document.querySelectorAll("tbody tr");

    linhas.forEach((linha, index) => {
        const checks = linha.querySelectorAll("input[type='checkbox']");
        let feitos = 0;

        checks.forEach(check => {
            if (check.checked) feitos++;
        });

        desempenho.push(feitos);
    });

    const ctx = document.getElementById("performanceChart");

    new Chart(ctx, {
        type: "bar",
        data: {
            labels: dias,
            datasets: [{
                label: "Tarefas concluídas",
                data: desempenho
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

atualizarGrafico();
document.querySelectorAll("input[type='checkbox']").forEach(check => {
    check.addEventListener("change", () => {
        location.reload();
    });
});
