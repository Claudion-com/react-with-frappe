frappe.pages["mydesk2"].on_page_load = function (wrapper) {
	frappe.ui.make_app_page({
		parent: wrapper,
		title: __("mydesk2"),
		single_column: true,
	});
};

frappe.pages["mydesk2"].on_page_show = function (wrapper) {
	load_desk_page(wrapper);
};

function load_desk_page(wrapper) {
	let $parent = $(wrapper).find(".layout-main-section");
	$parent.empty();

	frappe.require("mydesk2.bundle.jsx").then(() => {
		frappe.mydesk2 = new frappe.ui.Mydesk2({
			wrapper: $parent,
			page: wrapper.page,
		});
	});
}