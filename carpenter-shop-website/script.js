document.addEventListener("DOMContentLoaded", () => {
    // 1. Mobile Navigation Toggle Button
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Close mobile menu when a link is clicked
    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });

    // 2. Gallery Category Filter Buttons (All, Sofas, Cabinets, Curtains)
    const filterButtons = document.querySelectorAll(".filter-btn");
    const galleryItems = document.querySelectorAll(".gallery-item");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Update active button style
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const filterValue = button.getAttribute("data-filter");

            galleryItems.forEach(item => {
                const category = item.getAttribute("data-category");
                if (filterValue === "all" || filterValue === category) {
                    item.classList.remove("hide");
                } else {
                    item.classList.add("hide");
                }
            });
        });
    });

    // 3. Quick Inquiry Modal Buttons ("Inquire Now" & "Book Free Measurement")
    const modal = document.getElementById("quoteModal");
    const closeModal = document.getElementById("closeModal");
    const modalItemTitle = document.getElementById("modalItemTitle");
    const orderButtons = document.querySelectorAll(".order-btn");
    const heroQuoteBtn = document.getElementById("heroQuoteBtn");

    function openQuoteModal(itemName) {
        modalItemTitle.textContent = "Inquiry For: " + itemName;
        modal.style.display = "flex";
    }

    orderButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const itemName = btn.getAttribute("data-item");
            openQuoteModal(itemName);
        });
    });

    heroQuoteBtn.addEventListener("click", () => {
        openQuoteModal("Free Home Measurement Visit");
    });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    // Handle Modal Form Submission
    const modalForm = document.getElementById("modalForm");
    modalForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("modalName").value.trim();
        alert(`Thank you, ${name}! Our carpenter will call you shortly regarding your inquiry.`);
        modalForm.reset();
        modal.style.display = "none";
    });

    // 4. Service Card "Get Estimate ->" Buttons (Scrolls to Contact & selects service)
    const serviceInquireBtns = document.querySelectorAll(".service-inquire");
    const serviceSelect = document.getElementById("serviceType");
    const contactSection = document.getElementById("contact");

    serviceInquireBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const selectedService = btn.getAttribute("data-service");
            serviceSelect.value = selectedService;
            contactSection.scrollIntoView({ behavior: "smooth" });
        });
    });

    // 5. Main Contact Form Submission
    const quoteForm = document.getElementById("quoteForm");
    const formFeedback = document.getElementById("formFeedback");

    quoteForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("customerName").value.trim();
        const service = serviceSelect.value;

        formFeedback.textContent = `Shukriya ${name}! Your request for "${service}" has been received. We will contact you soon.`;
        quoteForm.reset();
    });

    // 6. WhatsApp Quick Chat Button
    const whatsappBtn = document.getElementById("whatsappBtn");
    whatsappBtn.addEventListener("click", () => {
        const phone = "919876543210"; // Replace with your actual shop WhatsApp number
        const message = encodeURIComponent("Hello WoodCraft Studio! I want to inquire about custom furniture (Sofa / Cabinet / Curtains).");
        window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
    });

    // 7. Back to Top Button
    const backToTopBtn = document.getElementById("backToTop");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 350) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    });

    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
