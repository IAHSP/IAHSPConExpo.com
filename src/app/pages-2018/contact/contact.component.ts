import { Component } from '@angular/core';

@Component({
    selector: 'app-2018-contact',
    template: `
        <section id="contact" class="padding100 margin-footer">
            <div class="container">

                <h1 class="text-center">Contact Us <strong><em>Today!</em></strong></h1>
                <div class="divider"><!-- divider -->
                    <i class="fa fa-star"></i>
                </div>

                <div class="row margin-top60">

                    <!-- FORM -->
                    <div class="col-md-8">

                        <h2>If you have questions about the IAHSP 2018 Educational Conference, just send us a message in the form below with any questions you may have.</h2>

                        <form role="form" name="formContactUs" class="white-row" novalidate="">
                            <div class="row">
                                <div class="form-group">
                                    <div class="col-md-6">
                                        <label>Full Name *</label>
                                        <input type="text" class="form-control" maxlength="100"
                                            id="frmName"
                                            required
                                        /><!-- /frmName -->
                                    </div>
                                    <div class="col-md-6">
                                        <label>E-mail Address *</label>
                                        <input type="email" class="form-control" maxlength="100"
                                            id="frmEmail"
                                            required
                                        /><!-- /frmEmail -->
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group">
                                    <div class="col-md-12">
                                        <label>Subject</label>
                                        <input type="text" class="form-control" maxlength="100"
                                            id="frmSubject"
                                            required
                                        /><!-- /frmSubject -->
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group">
                                    <div class="col-md-12">
                                        <label>Message *</label>
                                        <textarea id="frmMessage" rows="10" maxlength="5000" class="form-control"
                                            required
                                        ></textarea><!-- /frmMessage -->
                                    </div>
                                </div>
                            </div>

                            <br />

                            <div class="row">
                                <div class="col-md-12">
                                    <div vc-recaptcha key="'6Le-_AMTAAAAALK8HJZy0WyzIKsMp5T1sEvQNIYr'"></div>
                                </div>
                            </div>

                            <br />

                            <div class="row">
                                <div class="col-md-12">
                                    <button type="button" class="btn btn-primary btn-lg" ">Clear</button>
                                    <button type="button" class="btn btn-primary btn-lg" id="submit">Send Message</button>
                                </div>
                            </div>
                        </form>

                    </div>
                    <!-- /FORM -->


                    <!-- INFO -->
                    <div class="col-md-4">

                        <h2>Visit Us</h2>

                        <div class="white-row">
                            <div id="gmap"><!-- google map --></div>
                            <script type="text/javascript">
                                var $googlemap_latitude     = 26.141404,
                                    $googlemap_longitude    = -80.118047,
                                    $googlemap_zoom         = 13;
                            </script>

                            <div class="divider white half-margins"><!-- divider -->
                                <i class="fa fa-star"></i>
                            </div>

                            <p class="nomargin-bottom">
                                <span class="block"><strong><i class="fa fa-phone"></i> Phone:</strong> <a href="tel:18003927161">800-392-7161</a></span>
                                <span class="block"><strong><i class="fa fa-envelope"></i> Email:</strong> <a href="mailto:christa@iahsp.com">christa@iahsp.com</a></span>
                            </p>

                        </div>
                    </div>
                    <!-- /INFO -->
                </div>
            </div>
        </section>
    `,
    styles: [`
        
    `]
})
export class Contact2018Component {

}