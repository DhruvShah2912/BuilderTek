/*!
 *
 * Bryntum Gantt 5.3.6
 *
 * Copyright(c) 2023 Bryntum AB
 * https://bryntum.com/contact
 * https://bryntum.com/license
 *
 */
(function(l,n){var s=typeof exports=="object";if(typeof define=="function"&&define.amd)define([],n);else if(typeof module=="object"&&module.exports)module.exports=n();else{var c=n(),p=s?exports:l;for(var m in c)p[m]=c[m]}})(typeof self<"u"?self:void 0,()=>{var l={},n={exports:l},s=Object.defineProperty,c=Object.getOwnPropertyDescriptor,p=Object.getOwnPropertyNames,m=Object.prototype.hasOwnProperty,v=(e,a,o)=>a in e?s(e,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[a]=o,g=(e,a)=>{for(var o in a)s(e,o,{get:a[o],enumerable:!0})},f=(e,a,o,r)=>{if(a&&typeof a=="object"||typeof a=="function")for(let t of p(a))!m.call(e,t)&&t!==o&&s(e,t,{get:()=>a[t],enumerable:!(r=c(a,t))||r.enumerable});return e},b=e=>f(s({},"__esModule",{value:!0}),e),h=(e,a,o)=>(v(e,typeof a!="symbol"?a+"":a,o),o),u={};g(u,{default:()=>R}),n.exports=b(u);var d=class{static mergeLocales(...e){let a={};return e.forEach(o=>{Object.keys(o).forEach(r=>{typeof o[r]=="object"?a[r]={...a[r],...o[r]}:a[r]=o[r]})}),a}static trimLocale(e,a){let o=(r,t)=>{e[r]&&(t?e[r][t]&&delete e[r][t]:delete e[r])};Object.keys(a).forEach(r=>{Object.keys(a[r]).length>0?Object.keys(a[r]).forEach(t=>o(r,t)):o(r)})}static normalizeLocale(e,a){if(!e)throw new Error('"nameOrConfig" parameter can not be empty');if(typeof e=="string"){if(!a)throw new Error('"config" parameter can not be empty');a.locale?a.name=e||a.name:a.localeName=e}else a=e;let o={};if(a.name||a.locale)o=Object.assign({localeName:a.name},a.locale),a.desc&&(o.localeDesc=a.desc),a.code&&(o.localeCode=a.code),a.path&&(o.localePath=a.path);else{if(!a.localeName)throw new Error(`"config" parameter doesn't have "localeName" property`);o=Object.assign({},a)}for(let r of["name","desc","code","path"])o[r]&&delete o[r];if(!o.localeName)throw new Error("Locale name can not be empty");return o}static get locales(){return globalThis.bryntum.locales||{}}static set locales(e){globalThis.bryntum.locales=e}static get localeName(){return globalThis.bryntum.locale||"En"}static set localeName(e){globalThis.bryntum.locale=e||d.localeName}static get locale(){return d.localeName&&this.locales[d.localeName]||this.locales.En||Object.values(this.locales)[0]||{localeName:"",localeDesc:"",localeCoode:""}}static publishLocale(e,a){let{locales:o}=globalThis.bryntum,r=d.normalizeLocale(e,a),{localeName:t}=r;return!o[t]||a===!0?o[t]=r:o[t]=this.mergeLocales(o[t]||{},r||{}),o[t]}},i=d;h(i,"skipLocaleIntegrityCheck",!1),globalThis.bryntum=globalThis.bryntum||{},globalThis.bryntum.locales=globalThis.bryntum.locales||{},i._$name="LocaleHelper";var D={localeName:"Pt",localeDesc:"Português",localeCode:"pt",RemoveDependencyCycleEffectResolution:{descriptionTpl:"Remover dependência"},DeactivateDependencyCycleEffectResolution:{descriptionTpl:"Desativar dependência"},CycleEffectDescription:{descriptionTpl:"Foi encontrado um ciclo, formado por: {0}"},EmptyCalendarEffectDescription:{descriptionTpl:'O calendário "{0}" não fornece quaisquer intervalos de tempo de trabalho.'},Use24hrsEmptyCalendarEffectResolution:{descriptionTpl:"Utilize o calendário de 24 horas com sábados e domingos não úteis."},Use8hrsEmptyCalendarEffectResolution:{descriptionTpl:"Utilize o calendário de 8 horas (08:00-12:00, 13:00-17:00) com sábados e domingos não úteis."},ConflictEffectDescription:{descriptionTpl:"Foi encontrado um conflito de agendamento: {0} está em conflito com {1}"},ConstraintIntervalDescription:{dateFormat:"LLL"},ProjectConstraintIntervalDescription:{startDateDescriptionTpl:"Data de início do projeto {0}",endDateDescriptionTpl:"Data do fim do projeto {0}"},DependencyType:{long:["Início a Início","Início a Fim","Fim a Início","Fim a Fim"]},ManuallyScheduledParentConstraintIntervalDescription:{startDescriptionTpl:'Agendamento manual "{2}" obriga os seus filhos a não começar antes de {0}',endDescriptionTpl:'Agendamento manual "{2}" obriga os seus filhos a terminar o mais tardar a {1}'},DisableManuallyScheduledConflictResolution:{descriptionTpl:'Desativar agendamento manual para "{0}"'},DependencyConstraintIntervalDescription:{descriptionTpl:'Dependência ({2}) de "{3}" para "{4}"'},RemoveDependencyResolution:{descriptionTpl:'Remover dependência de "{1}" para "{2}"'},DeactivateDependencyResolution:{descriptionTpl:'Desativar dependência de "{1}" para "{2}"'},DateConstraintIntervalDescription:{startDateDescriptionTpl:'Restrições {3} {0} da tarefa "{2}"',endDateDescriptionTpl:'Restrições {3} {1} da tarefa "{2}"',constraintTypeTpl:{startnoearlierthan:"Iniciar não antes de",finishnoearlierthan:"Terminar não antes de",muststarton:"Tem de começar em",mustfinishon:"Tem de terminar em",startnolaterthan:"Iniciar não depois de",finishnolaterthan:"Terminar não depois de"}},RemoveDateConstraintConflictResolution:{descriptionTpl:'Remover a restrição "{1}" da tarefa "{0}"'}},I=i.publishLocale(D),y={localeName:"Pt",localeDesc:"Português",localeCode:"pt",Object:{Yes:"Sim",No:"Não",Cancel:"Cancelar",Ok:"OK",Week:"Semana"},Combo:{noResults:"Sem resultados",recordNotCommitted:"Não foi possível adicionar o registo",addNewValue:e=>`Adicionar ${e}`},FilePicker:{file:"Ficheiro"},Field:{badInput:"Valor de campo inválido",patternMismatch:"O valor deve corresponder a um padrão específico",rangeOverflow:e=>`O valor deve ser inferior ou igual a ${e.max}`,rangeUnderflow:e=>`O valor deve ser superior ou igual a ${e.min}`,stepMismatch:"O valor deve corresponder ao passo",tooLong:"O valor deve ser mais curto",tooShort:"O valor deve ser mais comprido",typeMismatch:"O valor deve estar num formato especial",valueMissing:"Este campo é obrigatório",invalidValue:"Valor de campo inválido",minimumValueViolation:"Violação de valor mínimo",maximumValueViolation:"Violação de valor máximo",fieldRequired:"Este campo é obrigatório",validateFilter:"O valor deve ser selecionado a partir da lista"},DateField:{invalidDate:"Entrada de data inválida"},DatePicker:{gotoPrevYear:"Ir para o ano anterior",gotoPrevMonth:"Ir para o mês anterior",gotoNextMonth:"Ir para o mês seguinte",gotoNextYear:"Ir para o ano seguinte"},NumberFormat:{locale:"pt",currency:"EUR"},DurationField:{invalidUnit:"Unidade inválida"},TimeField:{invalidTime:"Entrada de hora inválida"},TimePicker:{hour:"Hora",minute:"Minuto",second:"Segundo"},List:{loading:"A carregar..."},GridBase:{loadMask:"A carregar...",syncMask:"A guardar alterações, aguarde..."},PagingToolbar:{firstPage:"Ir para a primeira página",prevPage:"Ir para a página anterior",page:"Página",nextPage:"Ir para a página seguinte",lastPage:"Ir para a última página",reload:"Recarregar página atual",noRecords:"Sem registos a apresentar",pageCountTemplate:e=>`de ${e.lastPage}`,summaryTemplate:e=>`A apresentar registos ${e.start} - ${e.end} até ${e.allCount}`},PanelCollapser:{Collapse:"Fechar",Expand:"Expandir"},Popup:{close:"Fechar mensagem pop-up"},UndoRedo:{Undo:"Anular",Redo:"Repetir",UndoLastAction:"Anular a última ação",RedoLastAction:"Repetir a última ação anulada",NoActions:"Não existem itens na fila de anulações"},FieldFilterPicker:{equals:"igual a",doesNotEqual:"não é igual a",isEmpty:"está vazio",isNotEmpty:"não está vazio",contains:"contém",doesNotContain:"não contém",startsWith:"começa por",endsWith:"termina por",isOneOf:"é um de",isNotOneOf:"não é um de",isGreaterThan:"é maior do que",isLessThan:"é menor do que",isGreaterThanOrEqualTo:"é maior do que ou igual a",isLessThanOrEqualTo:"é menor do que ou igual a",isBetween:"está entre",isNotBetween:"não está entre",isBefore:"está antes de",isAfter:"está depois de",isToday:"é hoje",isTomorrow:"é amanhã",isYesterday:"é ontem",isThisWeek:"é esta semana",isNextWeek:"é a próxima semana",isLastWeek:"é a semana passada",isThisMonth:"é este mês",isNextMonth:"é o próximo mês",isLastMonth:"é o último mês",isThisYear:"é este ano",isNextYear:"é o próximo ano",isLastYear:"é o último ano",isYearToDate:"é o ano até à data",isTrue:"é verdadeiro",isFalse:"é falso",selectAProperty:"Selecione uma propriedade",selectAnOperator:"Selecione um operador",caseSensitive:"Case-sensitive",and:"e",dateFormat:"D/M/YY",selectOneOrMoreValues:"Selecionar um ou mais valores",enterAValue:"Introduzir um valor",enterANumber:"Introduzir um número",selectADate:"Selecionar uma data"},FieldFilterPickerGroup:{addFilter:"Adicionar filtro"},DateHelper:{locale:"pt",weekStartDay:1,nonWorkingDays:{0:!0,6:!0},weekends:{0:!0,6:!0},unitNames:[{single:"milissegundo",plural:"ms",abbrev:"ms"},{single:"segundo",plural:"segundos",abbrev:"s"},{single:"minuto",plural:"minutos",abbrev:"min"},{single:"hora",plural:"horas",abbrev:"h"},{single:"dia",plural:"dias",abbrev:"d"},{single:"semana",plural:"semanas",abbrev:"sem"},{single:"mês",plural:"meses",abbrev:"mês"},{single:"trimestre",plural:"trimestres",abbrev:"trim"},{single:"ano",plural:"anos",abbrev:"a"},{single:"década",plural:"décadas",abbrev:"dec"}],unitAbbreviations:[["mil"],["s","seg"],["m","min"],["h","hr"],["d"],["sem","seman"],["m","mês","mes"],["t","trim","trmt"],["a","ano"],["dec"]],parsers:{L:"DD/MM/YYYY",LT:"HH:mm",LTS:"HH:mm:ss A"},ordinalSuffix:e=>e+"°"}},M=i.publishLocale(y),C=new String,E={localeName:"Pt",localeDesc:"Português",localeCode:"pt",ColumnPicker:{column:"Coluna",columnsMenu:"Colunas",hideColumn:"Ocultar colunas",hideColumnShort:"Ocultar",newColumns:"Novas colunas"},Filter:{applyFilter:"Aplicar filtro",filter:"Filtro",editFilter:"Editar filtro",on:"em",before:"Antes",after:"Depois",equals:"Igual a",lessThan:"Inferior a",moreThan:"Superior a",removeFilter:"Remover filtro",disableFilter:"Desativar filtro"},FilterBar:{enableFilterBar:"Mostrar barra de filtro",disableFilterBar:"Ocultar barra de filtro"},Group:{group:"Agrupar",groupAscending:"Agrupar por ordem ascendente",groupDescending:"Agrupar por ordem descendente",groupAscendingShort:"Ascendente",groupDescendingShort:"Descendente",stopGrouping:"Parar agrupamento",stopGroupingShort:"Parar"},HeaderMenu:{moveBefore:e=>`Mover para antes de "${e}"`,moveAfter:e=>`Mover para depois de "${e}"`,collapseColumn:"Minimizar coluna",expandColumn:"Ampliar coluna"},ColumnRename:{rename:"Renomear"},MergeCells:{mergeCells:"Unir céculas",menuTooltip:"Unir células com o mesmo valor quando ordenadas por esta coluna"},Search:{searchForValue:"Pesquisar por valor"},Sort:{sort:"Ordenar",sortAscending:"Ordenar por ordem ascendente",sortDescending:"Ordenar por ordem descendente",multiSort:"Ordenação múltipla",removeSorter:"Remover ordenação",addSortAscending:"Adicionar ordenação ascendente",addSortDescending:"Adicionar ordenação descendente",toggleSortAscending:"Alterar para ascendente",toggleSortDescending:"Alterar para descendente",sortAscendingShort:"Ascendente",sortDescendingShort:"Descendente",removeSorterShort:"Remover",addSortAscendingShort:"+ Ascendente",addSortDescendingShort:"+ Descendente"},Column:{columnLabel:e=>`${e.text?`${e.text} coluna. `:""}ESPAÇO para menu de contexto${e.sortable?", ENTER para ordenar":""}`,cellLabel:C},Checkbox:{toggleRowSelect:"Ativar/desativar seleção de fila",toggleSelection:"Ativar/desativar seleção de todo o conjunto de dados"},RatingColumn:{cellLabel:e=>{var a;return`${e.text?e.text:""} ${(a=e.location)!=null&&a.record?`avaliação ${e.location.record[e.field]||0}`:""}`}},GridBase:{loadFailedMessage:"O carregamento de dados falhou!",syncFailedMessage:"A sincronização de dados falhou!",unspecifiedFailure:"Falha não especificada",networkFailure:"Erro de rede",parseFailure:"Falha ao analisar a resposta do servidor",serverResponse:"Resposta do servidor:",noRows:"Sem registos para exibir",moveColumnLeft:"Mover para a secção esquerda",moveColumnRight:"Mover para a secção direita",moveColumnTo:e=>`Mover coluna para ${e}`},CellMenu:{removeRow:"Eliminar"},RowCopyPaste:{copyRecord:"Copiar",cutRecord:"Cortar",pasteRecord:"Colar",rows:"linhas",row:"linha"},CellCopyPaste:{copy:"Copiar",cut:"Cortar",paste:"Colar"},PdfExport:{"Waiting for response from server":"A aguardar resposta do servidor...","Export failed":"Falha ao exportar","Server error":"Erro de servidor","Generating pages":"A gerar páginas...","Click to abort":"Cancelar"},ExportDialog:{width:"40em",labelWidth:"12em",exportSettings:"Exportar definições",export:"Exportar",exporterType:"Controlo de paginação",cancel:"Cancelar",fileFormat:"Formato do ficheiro",rows:"Filas",alignRows:"Alinhar filas",columns:"Colunas",paperFormat:"Formato em papel",orientation:"Orientação",repeatHeader:"Repetir cabeçalho"},ExportRowsCombo:{all:"Todas as filas",visible:"Filas visíveis"},ExportOrientationCombo:{portrait:"Retrato",landscape:"Paisagem"},SinglePageExporter:{singlepage:"Uma página"},MultiPageExporter:{multipage:"Várias páginas",exportingPage:({currentPage:e,totalPages:a})=>`Exportando página ${e}/${a}`},MultiPageVerticalExporter:{multipagevertical:" Várias páginas (vertical)",exportingPage:({currentPage:e,totalPages:a})=>`Exportando página ${e}/${a}`},RowExpander:{loading:"A carregar",expand:"Expandir",collapse:"Fechar"}},N=i.publishLocale(E),T={localeName:"Pt",localeDesc:"Português",localeCode:"pt",Object:{newEvent:"Novo evento"},ResourceInfoColumn:{eventCountText:e=>e+" evento"+(e!==1?"s":"")},Dependencies:{from:"De",to:"Até",valid:"Válido",invalid:"Inváldio"},DependencyType:{SS:"II",SF:"IF",FS:"FI",FF:"FF",StartToStart:"Início a Início",StartToEnd:"Início a Fim",EndToStart:"Fim a Início",EndToEnd:"Fim a Fim",short:["II","IF","FI","FF"],long:["Início a Início","Início a Fim","Fim a Início","Fim a Fim"]},DependencyEdit:{From:"De",To:"A",Type:"Tipo",Lag:"Atraso","Edit dependency":"Editar dependência",Save:"Guardar",Delete:"Eliminar",Cancel:"Cancelar",StartToStart:"Início a Início",StartToEnd:"Início a Fim",EndToStart:"Fim a Início",EndToEnd:"Fim a Fim"},EventEdit:{Name:"Nome",Resource:"Recurso",Start:"Início",End:"Fim",Save:"Guardar",Delete:"Eliminar",Cancel:"Cancelar","Edit event":"Editar evento",Repeat:"Repetir"},EventDrag:{eventOverlapsExisting:"O evento sobrepõe-se ao evento existente para este recurso",noDropOutsideTimeline:"O evento não pode ser deixado completamente fora da cronologia"},SchedulerBase:{"Add event":"Adicionar evento","Delete event":"Eliminar evento","Unassign event":"Remover atribuição de evento"},TimeAxisHeaderMenu:{pickZoomLevel:"Ampliação",activeDateRange:"Intervalo de datas",startText:"Data de início",endText:"Data de fim",todayText:"Hoje"},EventCopyPaste:{copyEvent:"Copiar evento",cutEvent:"Cortar evento",pasteEvent:"Colar evento"},EventFilter:{filterEvents:"Filtrar tarefas",byName:"Por nome"},TimeRanges:{showCurrentTimeLine:"Mostrar cronologia atual"},PresetManager:{secondAndMinute:{displayDateFormat:"ll LTS",name:"Segundos"},minuteAndHour:{topDateFormat:"ddd DD/MM, H",displayDateFormat:"ll LST"},hourAndDay:{topDateFormat:"ddd DD/MM",middleDateFormat:"LST",displayDateFormat:"ll LST",name:"Dia"},day:{name:"Dia/horas"},week:{name:"Semana/horas"},dayAndWeek:{displayDateFormat:"ll LST",name:"Semana/dias"},dayAndMonth:{name:"Mês"},weekAndDay:{displayDateFormat:"ll LST",name:"Semana"},weekAndMonth:{name:"Semanas"},weekAndDayLetter:{name:"Semanas/dias da semana"},weekDateAndMonth:{name:"Meses/semanas"},monthAndYear:{name:"Meses"},year:{name:"Anos"},manyYears:{name:"Múltiplos anos"}},RecurrenceConfirmationPopup:{"delete-title":"Está a eliminar um evento","delete-all-message":"Quer eliminar todas as ocorrências deste evento?","delete-further-message":"Quer eliminar esta e todas as ocorrências futuras deste evento ou apenas a ocorrência selecionada?","delete-further-btn-text":"Eliminar todos os eventos futuros","delete-only-this-btn-text":"Eliminar apenas este evento","update-title":"Está a alterar um evento repetido","update-all-message":"Quer alterar todas as ocorrências deste evento?","update-further-message":"Quer alterar apenas esta ocorrência do evento ou esta e todas as ocorrências futuras?","update-further-btn-text":"Todos os eventos futuros","update-only-this-btn-text":"Apenas este evento",Yes:"Sim",Cancel:"Cancelar",width:600},RecurrenceLegend:{" and ":" e ",Daily:"Diariamente","Weekly on {1}":({days:e})=>`Semanalmente a ${e}`,"Monthly on {1}":({days:e})=>`Mensalmente a ${e}`,"Yearly on {1} of {2}":({days:e,months:a})=>`Anualmente a ${e} de ${a}`,"Every {0} days":({interval:e})=>`A cada ${e} dias`,"Every {0} weeks on {1}":({interval:e,days:a})=>`A cada ${e} semanas em ${a}`,"Every {0} months on {1}":({interval:e,days:a})=>`A cada ${e} meses em ${a}`,"Every {0} years on {1} of {2}":({interval:e,days:a,months:o})=>`A cada ${e} anos em ${a} de ${o}`,position1:"no primeiro",position2:"no segundo",position3:"no terceiro",position4:"no quarto",position5:"no quinto","position-1":"no último",day:"dia",weekday:"dia da semana","weekend day":"dia de fim de semana",daysFormat:({position:e,days:a})=>`${e} ${a}`},RecurrenceEditor:{"Repeat event":"Repetir evento",Cancel:"Cancelar",Save:"Guardar",Frequency:"Frequência",Every:"A cada",DAILYintervalUnit:"dia(s)",WEEKLYintervalUnit:"semana(s)",MONTHLYintervalUnit:"mês(es)",YEARLYintervalUnit:"ano(s)",Each:"Cada","On the":"Em","End repeat":"Repetir no fim","time(s)":"vez(es)"},RecurrenceDaysCombo:{day:"dia",weekday:"dia da semana","weekend day":"dia do fim de semana"},RecurrencePositionsCombo:{position1:"primeiro",position2:"segundo",position3:"terceiro",position4:"quarto",position5:"quinto","position-1":"último"},RecurrenceStopConditionCombo:{Never:"Nunca",After:"Depois","On date":"Na data"},RecurrenceFrequencyCombo:{None:"Sem repetição",Daily:"Diariamente",Weekly:"Semanalmente",Monthly:"Mensalmente",Yearly:"Anualmente"},RecurrenceCombo:{None:"Nenhum",Custom:"Personalizar"},Summary:{"Summary for":e=>`Resumo de ${e}`},ScheduleRangeCombo:{completeview:"Agendamento completo",currentview:"Agendamento visível",daterange:"Intervalo de datas",completedata:"Agendamento completo (para todos os eventos)"},SchedulerExportDialog:{"Schedule range":"Intervalo de agendamento","Export from":"De","Export to":"Até"},ExcelExporter:{"No resource assigned":"Nenhum recurso atribuído"},CrudManagerView:{serverResponseLabel:"Resposta do servidor:"},DurationColumn:{Duration:"Duração"}},P=i.publishLocale(T),S={localeName:"Pt",localeDesc:"Português",localeCode:"pt",ConstraintTypePicker:{none:"Nenhum",muststarton:"Tem de começar em",mustfinishon:"Tem de terminar em",startnoearlierthan:"Iniciar não antes de",startnolaterthan:"Iniciar não depois de",finishnoearlierthan:"Terminar não antes de",finishnolaterthan:"Terminar não depois de"},CalendarField:{"Default calendar":"Calendário predefinido"},TaskEditorBase:{Information:"Informação",Save:"Guardar",Cancel:"Cancelar",Delete:"Eliminar",calculateMask:"A calcular...",saveError:"Não é possível guardar, corrija os erros primeiro",repeatingInfo:"Visualizar um evento repetido",editRepeating:"Editar"},TaskEdit:{"Edit task":"Editar tarefa",ConfirmDeletionTitle:"Confirmar eliminação",ConfirmDeletionMessage:"Tem a certeza de que quer eliminar o evento?"},GanttTaskEditor:{editorWidth:"44em"},SchedulerTaskEditor:{editorWidth:"32em"},SchedulerGeneralTab:{labelWidth:"6em",General:"Geral",Name:"Nome",Resources:"Recursos","% complete":"% concluído",Duration:"Duração",Start:"Início",Finish:"Fim",Effort:"Esforço",Preamble:"Preâmbulo",Postamble:"Conclusão"},GeneralTab:{labelWidth:"6.5em",General:"Geral",Name:"Nome","% complete":"% concluído",Duration:"Duração",Start:"Início",Finish:"Fim",Effort:"Esforço",Dates:"Datas"},SchedulerAdvancedTab:{labelWidth:"13em",Advanced:"Avançado",Calendar:"Calendário","Scheduling mode":"Modo de agendamento","Effort driven":"Esforço impulsionado","Manually scheduled":"Agendado manualmente","Constraint type":"Tipo de restrição","Constraint date":"Data de restrição",Inactive:"Inativo","Ignore resource calendar":"Ignorar calendário de recursos"},AdvancedTab:{labelWidth:"11.5em",Advanced:"Avançado",Calendar:"Calendário","Scheduling mode":"Modo de agendamento","Effort driven":"Esforço impulsionado","Manually scheduled":"Agendado manualmente","Constraint type":"Tipo de restrição","Constraint date":"Data de restrição",Constraint:"Restrição",Rollup:"Sumarização",Inactive:"Inativo","Ignore resource calendar":"Ignorar calendário de recursos"},DependencyTab:{Predecessors:"Anteriores",Successors:"Sucessores",ID:"ID",Name:"Nome",Type:"Tipo",Lag:"Atraso",cyclicDependency:"Dependência cíclica",invalidDependency:"Dependência inválida"},NotesTab:{Notes:"Notas"},ResourcesTab:{unitsTpl:({value:e})=>`${e}%`,Resources:"Recursos",Resource:"Recurso",Units:"Unidades"},RecurrenceTab:{title:"Repetir"},SchedulingModePicker:{Normal:"Normal","Fixed Duration":"Duração fixa","Fixed Units":"Unidades fixas","Fixed Effort":"Esforço fixo"},ResourceHistogram:{barTipInRange:'<b>{resource}</b> {startDate} - {endDate}<br><span class="{cls}">{allocated} de {available}</span> atribuídos',barTipOnDate:'<b>{resource}</b> on {startDate}<br><span class="{cls}">{allocated} de {available}</span> atribuídos',groupBarTipAssignment:'<b>{resource}</b> - <span class="{cls}">{allocated} de {available}</span>',groupBarTipInRange:'{startDate} - {endDate}<br><span class="{cls}">{allocated} de {available}</span> allocated:<br>{assignments}',groupBarTipOnDate:'Em {startDate}<br><span class="{cls}">{allocated} de {available}</span> atribuídos:<br>{assignments}',plusMore:"+{value} mais"},ResourceUtilization:{barTipInRange:'<b>{event}</b> {startDate} - {endDate}<br><span class="{cls}">{allocated}</span> atribuídos',barTipOnDate:'<b>{event}</b> em {startDate}<br><span class="{cls}">{allocated}</span> atribuídos',groupBarTipAssignment:'<b>{event}</b> - <span class="{cls}">{allocated}</span>',groupBarTipInRange:'{startDate} - {endDate}<br><span class="{cls}">{allocated} de {available}</span> atribuídos:<br>{assignments}',groupBarTipOnDate:'Em {startDate}<br><span class="{cls}">{allocated} de {available}</span> atribuídos:<br>{assignments}',plusMore:"+{value} mais",nameColumnText:"Recurso/Evento"},SchedulingIssueResolutionPopup:{"Cancel changes":"Cancelar a alteração e não fazer nada",schedulingConflict:"Conflito de agendamento",emptyCalendar:"Erro de configuração de calendário",cycle:"Ciclo de agendamento",Apply:"Aplicar"},CycleResolutionPopup:{dependencyLabel:"Selecione uma dependência:",invalidDependencyLabel:"Existem dependências inválidas envolvidas que têm de ser resolvidas:"},DependencyEdit:{Active:"Ativo"},SchedulerProBase:{propagating:"A calcular projeto",storePopulation:"A carregar dados",finalizing:"A finalizar resultados"},EventSegments:{splitEvent:"Dividir evento",renameSegment:"Renomear"},NestedEvents:{deNestingNotAllowed:"A remoção de aninhamento não é permitida",nestingNotAllowed:"O aninhamento não é permitido"},VersionGrid:{compare:"Comparar",description:"Descrição",occurredAt:"Ocorreu em",rename:"Renomear",restore:"Restaurar",stopComparing:"Parar comparação"},Versions:{entityNames:{TaskModel:"tarefa",AssignmentModel:"atribuição",DependencyModel:"hiperligação",ProjectModel:"projeto",ResourceModel:"recurso",other:"objeto"},entityNamesPlural:{TaskModel:"tarefas",AssignmentModel:"atribuições",DependencyModel:"hiperligações",ProjectModel:"projetos",ResourceModel:"recursos",other:"objetos"},transactionDescriptions:{update:"Alterada(s) {n} {entities}",add:"Adicionada(s) {n} {entities}",remove:"Removida(s) {n} {entities}",move:"Movida(s) {n} {entities}",mixed:"Alterada(s) {n} {entities}"},addEntity:"Adicionado {type} **{name}**",removeEntity:"Removido {type} **{name}**",updateEntity:"Alterado {type} **{name}**",moveEntity:"Movido {type} **{name}** de {from} para {to}",addDependency:"Adicionada hiperligação de **{from}** para **{to}**",removeDependency:"Removida hiperligação de **{from}** para **{to}**",updateDependency:"Editada hiperligação de **{from}** para **{to}**",addAssignment:"Atribuído **{resource}** para **{event}**",removeAssignment:"Removida atribuição de **{resource}** de **{event}**",updateAssignment:"Editada atribuição de **{resource}** para **{event}**",noChanges:"Sem alterações",nullValue:"nenhum",versionDateFormat:"M/D/YYYY h:mm a",undid:"Alterações anuladas",redid:"Alterações refeitas",editedTask:"Propriedades da tarefa editadas",deletedTask:"Uma tarefa eliminada",movedTask:"Uma tarefa movida",movedTasks:"Tarefas movidas"}},x=i.publishLocale(S),A={localeName:"Pt",localeDesc:"Português",localeCode:"pt",Object:{Save:"Guardar"},IgnoreResourceCalendarColumn:{"Ignore resource calendar":"Ignorar calendário de recursos"},InactiveColumn:{Inactive:"Inativo"},AddNewColumn:{"New Column":"Nova coluna"},CalendarColumn:{Calendar:"Calendário"},EarlyStartDateColumn:{"Early Start":"Fase inicial"},EarlyEndDateColumn:{"Early End":"Fim prematuro"},LateStartDateColumn:{"Late Start":"Início atrasado"},LateEndDateColumn:{"Late End":"Fim atrasado"},TotalSlackColumn:{"Total Slack":"Folga total"},ConstraintDateColumn:{"Constraint Date":"Data de restrição"},ConstraintTypeColumn:{"Constraint Type":"Tipo de restrição"},DeadlineDateColumn:{Deadline:"Prazo"},DependencyColumn:{"Invalid dependency":"Dependência inválida"},DurationColumn:{Duration:"Duração"},EffortColumn:{Effort:"Esforço"},EndDateColumn:{Finish:"Fim"},EventModeColumn:{"Event mode":"Modo de evento",Manual:"Manual",Auto:"Automático"},ManuallyScheduledColumn:{"Manually scheduled":"Agendado manualmente"},MilestoneColumn:{Milestone:"Marco"},NameColumn:{Name:"Nome"},NoteColumn:{Note:"Nota"},PercentDoneColumn:{"% Done":"% concluído"},PredecessorColumn:{Predecessors:"Anteriores"},ResourceAssignmentColumn:{"Assigned Resources":"Recursos atribuídos","more resources":"mais recursos"},RollupColumn:{Rollup:"Sumarização"},SchedulingModeColumn:{"Scheduling Mode":"Modo de agendamento"},SequenceColumn:{Sequence:"Sequência"},ShowInTimelineColumn:{"Show in timeline":"Mostrar na cronologia"},StartDateColumn:{Start:"Início"},SuccessorColumn:{Successors:"Sucessores"},TaskCopyPaste:{copyTask:"Copiar",cutTask:"Cortar",pasteTask:"Colar"},WBSColumn:{WBS:"WBS",renumber:"Renumerar"},DependencyField:{invalidDependencyFormat:"Formato de dependência inválido"},ProjectLines:{"Project Start":"Início do projeto","Project End":"Fim do projeto"},TaskTooltip:{Start:"Início",End:"Fim",Duration:"Duração",Complete:"Concluído"},AssignmentGrid:{Name:"Nome do recurso",Units:"Unidades",unitsTpl:({value:e})=>e?e+"%":""},Gantt:{Edit:"Editar",Indent:"Avanço",Outdent:"Diminuir avanço","Convert to milestone":"Converter para marco",Add:"Adicionar...","New task":"Nova tarefa","New milestone":"Novo marco","Task above":"Tarefa acima","Task below":"Tarefa abaixo","Delete task":"Eliminar",Milestone:"Marco","Sub-task":"Subtarefa",Successor:"Successor",Predecessor:"Predecessor",changeRejected:"O motor de agendamento rejeitou as alterações",linkTasks:"Adicionar dependências",unlinkTasks:"Remover dependências"},EventSegments:{splitTask:"Dividir tarefa"},Indicators:{earlyDates:"Início/fim antecipado",lateDates:"Início/fim atrasado",Start:"Início",End:"Fim",deadlineDate:"Prazo"},Versions:{indented:"Indentado",outdented:"Desindentado",cut:"Cortado",pasted:"Colado",deletedTasks:"Tarefas eliminadas"}},R=i.publishLocale(A);if(typeof n.exports=="object"&&typeof l=="object"){var F=(e,a,o,r)=>{if(a&&typeof a=="object"||typeof a=="function")for(let t of Object.getOwnPropertyNames(a))!Object.prototype.hasOwnProperty.call(e,t)&&t!==o&&Object.defineProperty(e,t,{get:()=>a[t],enumerable:!(r=Object.getOwnPropertyDescriptor(a,t))||r.enumerable});return e};n.exports=F(n.exports,l)}return n.exports});
